from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Topic, Webpage, AccessRecord
from . import forms

def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    my_dict = {'access_records': webpages_list}
    return render(request, 'first_app/index.html', context=my_dict)

def form_name_view(request):
    form = forms.FormName()

    if request.method == 'POST':
        form = forms.FormName(request.POST)

        if form.is_valid():
            print("Validations success!")
        
        print("Name: ", form.cleaned_data['name'])
        print("Email: ", form.cleaned_data['email'])
        print('Text: ', form.cleaned_data['text'])

    return render(request, 'first_app/form_page.html', {'form':form})
