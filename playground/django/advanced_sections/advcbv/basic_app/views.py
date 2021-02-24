from django.shortcuts import render
from django.views.generic import View, TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView

from . import models
from django.urls import reverse_lazy
# from django.http import HttpResponse

# class CBView(View):
#     def get(self, request):
#         return HttpResponse("Class Based Views are cool")

class IndexView(TemplateView):
    template_name = 'index.html'

#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['injectme'] = 'shit'
#         return context

class SchoolListView(ListView):
    context_object_name = 'schools'
    model = models.School
    # school_list by default

class SchoolDetailView(DetailView):
    context_object_name = 'school_detail'
    model = models.School
    template_name = 'basic_app/school_detail.html'

class SchoolCreateView(CreateView):
    fields = ('name', 'principal', 'location')
    model = models.School

class SchoolUpdateView(UpdateView):
    fields = ('name', 'principal')
    model = models.School

class SchoolDeleteView(DeleteView):
    model = models.School
    success_url = reverse_lazy("basic_app:list")