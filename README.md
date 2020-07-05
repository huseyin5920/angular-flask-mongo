# Proje İndirme

Zipli dosyayı indiriniz. Daha sonra ziplenmiş dosyayı çıkartınız. Dosyayı Visual Studio Code ile açınız.

# MongoCloud Bağlantısı

Projede veritabanı olarak MongoCloud kullanılmıştır. Sadece MongoCloud'a özel açtığım hesabı mailde size iletmiş olacağım. Ayarlardan geçerli ip adresini 0.0.0.0 olarak ayarladım. Bu sayede her cihazdan erişim sağlanabilecektir. Knedi hesabınızdan girmek isterseniz "rss_feed" adında veritabanı ve "rss_collection" adında koleksiyon oluşturunuz. Daha sonra uygulama içinde bulunan "haberleri_al.py" ve "flask-rss.py" dosyalarındaki mongocloud bağlantılarını ayarlayınız.

# Uygulamada çalıştırılacak dosyalar

1) Öncelikle genel uygulama klasörü içindeki "haberleri_cek" adlı klasöre giderek, "haberleri_al.py" adlı dosyayı çlıştırınız. Bu dosya ile haber sitelerinden haberleri çekiyoruz ve Mongo Cloud veritabanımıza kaydediyoruz. Programda hata olmamasına rağmen bazen hata veriyor. Lütfen programı durdurup birkaç kez daha deneyiniz. Sebebini araştırdığımda rss sağlayıcılarından kaynaklanan güncelleme, sayfa yenileme haber güncelleme gibi anlara denk gelmesi sonucu bu hatayı nadir veriyor.

2) Genel uygulama klasörü içinde "Flask" klasörüne gidiniz ve "flask-rss.py" adlı dosyayı çalıştırınız. Bu dosya projenin Bacend kısmıdır. mongodb veritabanından sorgulama yaparak, restful olarak JSON formatında dışarıya verir. Bunları görmek için http://127.0.0.1:5000/task/list ve uygulama içinde de kodları bulunan diğer uzantılı jsonlara ulaşabilirsiniz.

3) Son olarak genel uygulama klasörü içinde terminali açarak "ng serve" yazınız ve projeyi ayağa kaldırınız. Uygulama http://localhost:4200/ adresinde çalışmaktadır.




# RssAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
