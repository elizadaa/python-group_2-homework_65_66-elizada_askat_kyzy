# Generated by Django 2.1.7 on 2019-03-12 09:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0009_auto_20190307_1433'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='category',
            new_name='categories',
        ),
    ]
