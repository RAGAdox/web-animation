from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'anim/index.xhtml')
    #return HttpResponse('home page request')
