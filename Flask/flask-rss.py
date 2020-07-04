from flask import Flask,render_template, jsonify, request
import pymongo
from pymongo import MongoClient
import json
from datetime import datetime, timedelta

app = Flask(__name__)
client = MongoClient("mongodb+srv://huseyin:angularflask@cluster0-ogqg8.mongodb.net/rss_feed?retryWrites=true&w=majority")  # host uri
db = client.rss_feed  # Select the database
tasks_collection = db.rss_collection  # Select the collection name
initial_tasks = [rss_collection for rss_collection in tasks_collection.find()]

@app.route('/task/list', methods=['GET'])
def get_tasks():
    all_tasks = tasks_collection.find()
    task_list = []
    for rss_collection in all_tasks:
        task_list.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response = jsonify(task_list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



@app.route('/task/list/mynet', methods=['GET'])
def get_mynet():
    mynet_tasks=tasks_collection.find({"saglayici":"Mynet"})
    task_list_mynet = []
    for rss_collection in mynet_tasks:
        task_list_mynet.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_mynet = jsonify(task_list_mynet)
    response_mynet.headers.add('Access-Control-Allow-Origin', '*')
    return response_mynet



@app.route('/task/list/haberturk', methods=['GET'])
def get_haberturk():
    haberturk_tasks=tasks_collection.find({"saglayici":"HaberTurk"})
    task_list_haberturk = []
    for rss_collection in haberturk_tasks:
        task_list_haberturk.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_haberturk = jsonify(task_list_haberturk)
    response_haberturk.headers.add('Access-Control-Allow-Origin', '*')
    return response_haberturk



@app.route('/task/list/cnnturk', methods=['GET'])
def get_cnnturk():
    cnnturk_tasks=tasks_collection.find({"saglayici":"CnnTurk"})
    task_list_cnnturk = []
    for rss_collection in cnnturk_tasks:
        task_list_cnnturk.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_cnnturk = jsonify(task_list_cnnturk)
    response_cnnturk.headers.add('Access-Control-Allow-Origin', '*')
    return response_cnnturk



@app.route('/task/list/sabah', methods=['GET'])
def get_sabah():
    sabah_tasks=tasks_collection.find({"saglayici":"sabah"})
    task_list_sabah = []
    for rss_collection in sabah_tasks:
        task_list_sabah.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_sabah = jsonify(task_list_sabah)
    response_sabah.headers.add('Access-Control-Allow-Origin', '*')
    return response_sabah



@app.route('/task/list/ahaber', methods=['GET'])
def get_ahaber():
    ahaber_tasks=tasks_collection.find({"saglayici":"ahaber"})
    task_list_ahaber = []
    for rss_collection in ahaber_tasks:
        task_list_ahaber.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_ahaber = jsonify(task_list_ahaber)
    response_ahaber.headers.add('Access-Control-Allow-Origin', '*')
    return response_ahaber



@app.route('/task/list/ntv', methods=['GET'])
def get_ntv():
    ntv_tasks=tasks_collection.find({"saglayici":"Ntv"})
    task_list_ntv = []
    for rss_collection in ntv_tasks:
        task_list_ntv.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_ntv = jsonify(task_list_ntv)
    response_ntv.headers.add('Access-Control-Allow-Origin', '*')
    return response_ntv



@app.route('/task/list/bbc', methods=['GET'])
def get_bbc():
    bbc_tasks=tasks_collection.find({"saglayici":"bbc"})
    task_list_bbc = []
    for rss_collection in bbc_tasks:
        task_list_bbc.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_bbc = jsonify(task_list_bbc)
    response_bbc.headers.add('Access-Control-Allow-Origin', '*')
    return response_bbc


"""
@app.route('/task/list/birsaat', methods=['GET'])
def get_birsaat():
    saati_al=tasks_collection.find({"zaman"})
    saati_al=datetime.datetime.strptime(saati_al, "")
    date1 = datetime.utcnow()- timedelta(minutes=500)
    birsaat_tasks=tasks_collection.find({"zaman":{"gte":date1}})
    
    task_list_birsaat = []
    for rss_collection in birsaat_tasks:
        task_list_birsaat.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_birsaat = jsonify(task_list_birsaat)
    response_birsaat.headers.add('Access-Control-Allow-Origin', '*')
    return response_birsaat

@app.route('/task/list/birgun', methods=['GET'])
def get_birgun():
    date1 = datetime.utcnow- timedelta(minutes=500)
    birsaat_tasks=tasks_collection.find({"zaman":{"gte":date1}})
    task_list_birgun = []
    for rss_collection in birsaat_tasks:
        task_list_birgun.append({'baslik': rss_collection['baslik'], 'kisa_bilgi': rss_collection['kisa_bilgi'], 'link': rss_collection['link'], 'zaman': rss_collection['zaman'], 'saglayici': rss_collection['saglayici']})

    response_birgun = jsonify(task_list_birgun)
    response_birgun.headers.add('Access-Control-Allow-Origin', '*')
    return response_birgun

"""


if __name__ == "__main__":
    app.run(debug=True)














