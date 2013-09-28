from django.db import models

# Create your models here.
class DictionaryEntry(models.Model):
    simplified = models.CharField(max_length=50)
    traditional = models.CharField(max_length=50)
    pinyin = models.CharField(max_length=200)
    definition = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.simplified

