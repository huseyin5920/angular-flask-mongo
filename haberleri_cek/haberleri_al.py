import feedparser
import datetime
import threading
import pymongo
from pymongo import MongoClient
from datetime import date
import datetime
import dateutil.parser

client = pymongo.MongoClient("mongodb+srv://huseyin:angularflask@cluster0-ogqg8.mongodb.net/rss_feed?retryWrites=true&w=majority")
db = client["rss_feed"]
collection=db["rss_collection"]


def mynet():
    NewsFeedMynet = feedparser.parse("http://www.mynet.com/haber/rss/sondakika")
    entry = NewsFeedMynet.entries[1]

    print(entry.keys())

    saat_mynet = entry.published
    saat_mynet = datetime.datetime.strptime(saat_mynet, "%a, %d %b %y %X %z")

    
    post_mynet={"baslik":entry.title,"kisa_bilgi":entry.summary,"link":entry.link,"zaman":saat_mynet,"saglayici":"Mynet"}
    if not collection.find_one({"baslik": entry.title}):
        collection.insert_one(post_mynet) 



def haberturk():
    NewsFeedHaberturk = feedparser.parse("http://www.haberturk.com/rss/manset.xml")
    entry1 = NewsFeedHaberturk.entries[1]

    print(entry1.keys())

    saat_haberturk = entry1.published
    saat_haberturk = datetime.datetime.strptime(saat_haberturk, "%a, %d %b %Y %X %Z")

    
    post_haberturk={"baslik":entry1.title,"kisa_bilgi":entry1.summary,"link":entry1.link,"zaman":saat_haberturk,"saglayici":"HaberTurk"}
    if not collection.find_one({"baslik": entry1.title}):
        collection.insert_one(post_haberturk) 
    

def cnnturk():
    NewsFeedCnnturk = feedparser.parse("https://www.cnnturk.com/feed/rss/all/news")
    entry2 = NewsFeedCnnturk.entries[1]
    
    print(entry2.keys())

    saat_cnn = entry2.published
    saat_cnn = datetime.datetime.strptime(saat_cnn, "%a, %d %b %Y %X %Z")

    post_cnn={"baslik":entry2.title,"kisa_bilgi":entry2.summary,"link":entry2.link,"zaman":saat_cnn,"saglayici":"CnnTurk"}
    if not collection.find_one({"baslik": entry2.title}):
        collection.insert_one(post_cnn) 


def sabah():
    NewsFeedSabah = feedparser.parse("https://www.sabah.com.tr/rss/gundem.xml")
    entry3 = NewsFeedSabah.entries[1]

    print(entry3.keys())

    saat_sabah = entry3.published
    saat_sabah = datetime.datetime.strptime(saat_sabah, "%a, %d %b %Y %X %z")

   
    post_sabah={"baslik":entry3.title,"kisa_bilgi":entry3.summary,"link": entry3.link, "zaman":saat_sabah,"saglayici":"sabah"}
    if not collection.find_one({"baslik": entry3.title}):
        collection.insert_one(post_sabah)


def ahaber():
    NewsFeedAhaber = feedparser.parse("https://www.ahaber.com.tr/rss/son24saat.xml")
    entry4 = NewsFeedAhaber.entries[1]

    saat_ahaber = entry4.published
    saat_ahaber = datetime.datetime.strptime(saat_ahaber, "%a, %d %b %Y %X %z")

    post_ahaber={"baslik":entry4.title,"kisa_bilgi":entry4.summary,"link":entry4.link,"zaman":saat_ahaber,"saglayici":"ahaber"}
    if not collection.find_one({"baslik": entry4.title}):
        collection.insert_one(post_ahaber) 
    
    

def ntv():
    NewsFeedNtv = feedparser.parse("https://www.ntv.com.tr/son-dakika.rss")
    entry5 = NewsFeedNtv.entries[1]
    
    print(entry5.keys())
   
    post_ntv={"baslik":entry5.title,"kisa_bilgi":entry5.summary,"link":entry5.link,"zaman":entry5.published,"saglayici":"Ntv"}
    if not collection.find_one({"baslik": entry5.title}):
        collection.insert_one(post_ntv) 
   

def bbc():
    NewsFeedBbc = feedparser.parse("http://feeds.bbci.co.uk/turkce/rss.xml")
    entry6 = NewsFeedBbc.entries[1]

    print(entry6.keys())

    saat_bbc = entry6.published
    saat_bbc = datetime.datetime.strptime(saat_bbc, "%a, %d %b %Y %X %Z")

    post_bbc={"baslik":entry6.title,"kisa_bilgi":entry6.summary,"link":entry6.link,"zaman":saat_bbc,"saglayici":"bbc"}
    if not collection.find_one({"baslik": entry6.title}):
        collection.insert_one(post_bbc) 



def run():
    threading.Timer(900.0, run).start() # called every minute
    mynet()
    haberturk()
    cnnturk()
    sabah()
    ahaber()
    ntv()
    bbc()
    print("******HABERLER ALINDI******")
run()



