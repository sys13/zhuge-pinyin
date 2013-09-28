# Create your views here.
from django.core.files import File
from django.shortcuts import render
import jieba
from pinyin.models import DictionaryEntry


def home(request):
    # import_dictionary()
    return render(request, 'home.html')


def add_user_text(request):
    user_text = request.POST.get('user_text')
    seg_list = jieba.cut(user_text, cut_all=False)
    word_list = []
    for word in seg_list:
        entry = list(DictionaryEntry.objects.filter(simplified=word))[0]
        if entry is None:
            entry = list(DictionaryEntry.objects.filter(traditional=word))[0]
        print entry.simplified
        word_list.append(entry)
    print word_list

    return render(request, 'pinyin.html', {'seg_list': seg_list, 'word_list': word_list})


def import_dictionary():
    f = open('cedict_ts.html', 'r')
    dictFile = File(f)
    l = 0
    for line in dictFile:
        print line
        first_space = line.index(' ', )
        second_space = line.index(' [')
        last_space = line.index('] /')

        entry = DictionaryEntry()
        entry.traditional = line[:first_space]
        entry.simplified = line[first_space + 1:line.index(' [')]
        entry.pinyin = line[second_space + 2:last_space]
        entry.definition = unicode(line[last_space + 3:len(line) - 4], errors='ignore')
        print entry.traditional, entry.simplified, entry.pinyin, entry.definition
        # entry
        entry.save()