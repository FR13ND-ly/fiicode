# Generated by Django 4.2 on 2023-04-22 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiicode', '0006_alter_requestvacation_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacation',
            name='userId',
            field=models.CharField(max_length=255),
        ),
    ]