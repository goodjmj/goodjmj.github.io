var app = angular.module("goodJMJ", []);
app.controller('MainCtrl', function MainCtrl($scope) {

  $scope.wallpaperList = [
    {
      url : "images/wallpapers/lock-screen-1.jpg",
      category : "home",
      title : "갑질은 계속된다, 멈추라고 하지 않으면",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-2.jpg",
      category : "home",
      title : "좋게 좋게 넘어가지 않아야 좋은 세상이 온다.",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-3.jpg",
      category : "home",
      title : "애정 없는 비판에 일일이 상처받지 않기",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-4.jpg",
      category : "home",
      title : "세월호가 떠오르는 모습을 우리는 함께 보고 있다.",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-5.jpg",
      category : "home",
      title : "인생 자체는 긍정적으로, 개소리에는 단호하게!",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-6.jpg",
      category : "home",
      title : "사람들이 말하게 두고, 나는 나의 일을 하러 가자",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-7.jpg",
      category : "home",
      title : "오늘의 나를 행복하게 하는데 최선을 다할 것",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/lock-screen-8.jpg",
      category : "home",
      title : "나는 잘 모르지만 그럴 수 있겠다 라고 공감하는 것",
      description : "모바일 배경화면"
    },
    {
      url : "images/wallpapers/mac-horizontal-1.jpg",
      category : "mac",
      title : "갑질은 계속된다, 멈추라고 하지 않으면",
      description : "데스크톱 배경화면"
    },
    {
      url : "images/wallpapers/mac-horizontal-2.jpg",
      category : "mac",
      title : "애정 없는 비판에 일일이 상처받지 않기",
      description : "데스크톱 배경화면"
    },
    {
      url : "images/wallpapers/mac-horizontal-3.jpg",
      category : "mac",
      title : "오늘의 나를 행복하게 하는데 최선을 다할 것",
      description : "데스크톱 배경화면"
    },
    {
      url : "images/wallpapers/mac-horizontal-4.jpg",
      category : "mac",
      title : "인생 자체는 긍정적으로, 개소리에는 단호하게!",
      description : "데스크톱 배경화면"
    },
  ]

  $scope.bookstoreList = [
    {
      url : "http://www.yes24.com/24/goods/57817824?scode=032&OzSrank=1#Review",
      logo : "yes24.svg",
      name : "예스24",
      review : "세상에는 무례한 사람들이 참 많다, 하루라도 그런 사람들을 안 만나고 지나치는 일이 없는 것이 이 사회인 것 같다. 그런 사람들을 대할 때 나의 모습은 언제나 움추려들고 점점 내 자신을 지워나가는 것이 나의 대처 방법이였다. 이책은 제목부터 참 당차게 다가온다. 무례한 사람에게 웃으며 대처하는 법이라니 정말 나에게 필요한 책이라는 생각에 읽어보게 되었다.." 
    },
    {
      url : "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=127698684&start=slayer",
      logo : "aladin.svg",
      name : "알라딘",
      review : "갈등상황 자체가 싫어 상대방에게 끼워맞춰 술에 술탄듯 물에 물탄듯 살아 왔던 나. 속은 썩어도 겉으론 생글생글. 그래도 아무 문제 없으니 됐다 생각했다. 문제를 일으키지 않았으니 문제가 없다고. 그런데 그것이 문제였구나. 이제 영리해져야지. 좀더 현명해져야지! 무례한 당신이 바로 문제다!" 
    },
    {
      url : "http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788957369364&orderClick=sbb#review",
      logo : "kyobo.svg",
      name : "교보문고",
      review : "불편하면서도 재미있는 책이다. 저자가 여자이기 때문인지 몰라도 여성으로서 겪는 갑질에 대한 글이 많이 보였다.남자라면 해당되지 않는 표현들. 기가 세다느니 당당하다느니 좋은 말이지만 여성에게 쓰이면 색안경이 씌여진다.여성에게 가해지는 언어 폭력이라는 것은 처음보는 사람일지라도 아주 쉽게 저지르곤 하는데.." 
    },
    {
      url : "http://book.interpark.com/product/BookDisplay.do?_method=detail&sc.prdNo=277545854&sc.saNo=003002003&bid1=search_auto&bid2=detail&bid3=prd_nm&bid4=001",
      logo : "interpark.svg",
      name : "인터파크",
      review : "평소에 하루의 상당부분을 이런 문제에 대해서 생각하면서 지냈던 모양인데, 그것을 인지조차 못했었나보다. 무례한 사람에게 웃으며 대처하는 법이라는 제목을 보았을 때만 해도 그 방법에 참 궁금하긴하던 차에, 책을 한장한장 읽어나가는데 이건 거의 평소에 궁금해.." 
    },
    {
      url : "https://ridibooks.com/v2/Detail?id=1896000054",
      logo : "ridibooks.svg",
      name : "리디북스",
      review : "재밌게 읽었어요. 처음에는 대화의 기술이라던지 품위를 잃지 않는 사이다썰의 나열일줄알 았는데 아니네요. 그래도 재밌었어요. 저자 분이 여성이어서 그런지 이야기속에 나오는 컨텐츠도 익히 알고 있었던 거라 이해가 빨랐습니다." 
    },
  ]

  $scope.random = function() {
      return 0.5 - Math.random();
  }

});