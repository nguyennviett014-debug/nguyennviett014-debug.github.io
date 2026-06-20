'use strict';

/* ══════════════════════════════════════════════════════
   TRANSLATIONS — 5 Languages (JA / VI / EN / ZH / KO)
══════════════════════════════════════════════════════ */
const T = {

  ja: {
    'nav.about': '農園について', 'nav.services': '体験サービス',
    'nav.experience': '体験の流れ', 'nav.gallery': 'ギャラリー',
    'nav.pricing': '料金', 'nav.book': 'ご予約',

    'hero.slide1.sub': 'ダラットの自然の中で',
    'hero.slide1.tagline': '果物と過ごす\n特別なひととき',
    'hero.slide2.sub': '6月〜8月限定',
    'hero.slide2.tagline': 'ブルーベリー狩り\n家族の週末',
    'hero.slide3.sub': '週末・カップル限定',
    'hero.slide3.tagline': '灯籠の夜\n二人の物語',
    'hero.cta.services': '体験を見る →',
    'hero.cta.book': '予約する →',

    'concept.jp': '自然とともに、心が潤う農園体験。',
    'concept.en': 'A farm experience where nature nourishes the soul.',

    'about.label': '農園について / ABOUT',
    'about.title': 'みどりファームについて',
    'about.lead': 'ダラットの澄んだ空気と豊かな土壌に育まれた果物たち。',
    'about.body': '日本式の農業体験をベトナムのダラットでお届けしています。ブルーベリー、ぶどう、そして家族で楽しめる多彩なアクティビティを通じて、忘れられない思い出を作りましょう。',
    'about.cta': 'サービスを見る →',

    'services.label': '体験サービス / SERVICES',
    'services.title': '農園の体験メニュー',

    'svc.blueberry.season': '6月〜8月',
    'svc.blueberry.jp': 'ブルーベリー狩り',
    'svc.blueberry.desc': '新鮮なブルーベリーを自分の手でたっぷり収穫。お子様も大喜びの定番体験です。',
    'svc.grape.season': '7月〜9月',
    'svc.grape.jp': 'ぶどう狩り',
    'svc.grape.desc': 'たわわに実ったぶどうを収穫し、農園テラスで味わいましょう。',
    'svc.fishing.season': '通年',
    'svc.fishing.jp': '釣り＆BBQ',
    'svc.fishing.desc': '釣った魚をその場で炭火焼きに。自然の中で過ごす最高のひとときです。',
    'svc.kids.season': '通年・無料',
    'svc.kids.jp': 'キッズスペース',
    'svc.kids.desc': '小さなお子様が安心して遊べる専用エリア。パパママもゆっくりできます。',
    'svc.lantern.season': '週末・夕方〜',
    'svc.lantern.jp': '灯籠夕暮れ散歩',
    'svc.lantern.desc': '柔らかな灯籠の明かりに包まれた農園を、二人でゆっくりと歩く夕暮れ体験。カップルに大人気の特別プログラムです。',
    'svc.more': 'くわしく見る →',

    'audience.family.label': 'ご家族向け / FOR FAMILIES',
    'audience.family.title': '子どもの笑顔が\n輝く週末',
    'audience.family.desc': 'お子様が思いきり遊び、家族みんなで自然の恵みを楽しむ特別な休日。',
    'audience.family.cta': 'ご予約はこちら →',
    'audience.couple.label': 'カップル向け / FOR COUPLES',
    'audience.couple.title': '灯籠の夜\n二人のための時間',
    'audience.couple.desc': '柔らかな灯籠の光の中で、大切な人と過ごす忘れられないひととき。',
    'audience.couple.cta': '詳しく見る →',

    'exp.label': '体験の流れ / HOW IT WORKS',
    'exp.title': '体験の流れ',
    'exp.step1.title': '予約する', 'exp.step1.desc': 'フォームまたはLINEで日時を選んでご予約ください。',
    'exp.step2.title': '農園へ到着', 'exp.step2.desc': 'ダラット市内から車で約20分。スタッフがお出迎えします。',
    'exp.step3.title': '体験を楽しむ', 'exp.step3.desc': '好きな体験を自由に組み合わせてお楽しみください。',
    'exp.step4.title': 'お土産を持って帰宅', 'exp.step4.desc': '収穫した果物はそのままお持ち帰りいただけます。',

    'gallery.label': 'ギャラリー / GALLERY',
    'gallery.title': '農園の風景',

    'stats.visitors': '年間来園者', 'stats.services': '体験メニュー',
    'stats.languages': '対応言語', 'stats.satisfaction': '満足度',

    'reviews.label': 'お客様の声 / REVIEWS',
    'reviews.title': 'ご来園者の声',
    'review.1.text': '「子どもたちが大喜びでした。ブルーベリー狩りは初めての体験で、とても新鮮でした！」',
    'review.1.author': '— 田中さん（家族連れ）',
    'review.2.text': '「灯籠散歩は本当にロマンティックで素敵でした。また来たいと思います。」',
    'review.2.author': '— Nguyễn Lan（カップル）',
    'review.3.text': '「釣った魚をその場で焼いて食べるのが最高でした。スタッフも親切でした。」',
    'review.3.author': '— Chen Wei（家族）',

    'pricing.label': '料金 / PRICING',
    'pricing.title': '料金プラン',
    'price.per': 'お一人様', 'price.popular': '人気 No.1', 'price.book': '予約する',
    'price.basic.name': 'ベーシック',
    'price.basic.f1': '果物狩り体験（1種）', 'price.basic.f2': '収穫果物持ち帰り（100g）', 'price.basic.f3': 'キッズスペース利用',
    'price.family.name': 'ファミリー', 'price.family.per': '4名まで',
    'price.family.f1': '果物狩り体験（2種）', 'price.family.f2': '釣り＆BBQセット',
    'price.family.f3': '収穫果物持ち帰り（500g）', 'price.family.f4': 'キッズスペース（無料）',
    'price.couple.name': 'カップル', 'price.couple.per': '2名様',
    'price.couple.f1': '果物狩り体験（2種）', 'price.couple.f2': '灯籠夕暮れ散歩', 'price.couple.f3': 'プレミアムBBQセット',

    'booking.label': 'ご予約 / RESERVATION',
    'booking.title': 'ご予約はこちら',
    'booking.desc': 'ご希望の日程・プランをお選びいただき、お気軽にお申し込みください。確認後、担当よりご連絡いたします。',
    'form.name': 'お名前', 'form.email': 'メール', 'form.phone': '電話番号',
    'form.plan': 'プランを選択',
    'form.guests1': '1名', 'form.guests2': '2名', 'form.guests3': '3名', 'form.guests4': '4名以上',
    'form.message': 'ご要望・備考',
    'form.submit': '予約リクエストを送る',
    'form.success': 'ありがとうございます！確認のご連絡をお送りします。',

    /* New services */
    'svc.sand.season': '通年', 'svc.sand.jp': '砂場＆ショベルカー遊び',
    'svc.sand.desc': '本格的なショベルカーのおもちゃが揃った砂場。お子様が夢中で遊べる特別なスペースです。',
    'svc.food.jp': 'バンミー＆軽食コーナー',
    'svc.food.desc': '農園で収穫したフルーツとともに、バンミー（フランスパン）・揚げ春巻き・アイスクリームをご堪能ください。',
    'svc.juice.jp': 'フレッシュフルーツジュース',
    'svc.juice.desc': '農園で採れたぶどう・ブルーベリーをその場で搾った搾りたてジュース。農園の恵みをそのままお届けします。',
    'svc.maze.jp': 'キッズ迷路',
    'svc.maze.desc': '農園の緑に囲まれた小さな迷路。お子様が探検気分で楽しめる人気スポットです。',
    'svc.photo.jp': 'フォトスポット',
    'svc.photo.desc': '農園内のさまざまな場所に設けられた映えスポット。大切な思い出を美しい写真に残しましょう。',
    'svc.food.season': '通年',
    'svc.chill.season': '週末・夜', 'svc.chill.jp': '月見チルタイム',
    'svc.chill.desc': '星空と月明かりの下、静かな農園でゆったりとした時間を。心が解きほぐれる特別なひとときです。',
    'svc.kids.free': '5歳以下のお子様は無料でご入場いただけます。',
    /* Experience flows */
    'exp.tab.family': 'ご家族・グループ', 'exp.tab.couple': 'カップル（夕暮れ）',
    'exp.family.title': '家族・友人との一日プラン',
    'exp.family.sub': 'お子様も大人も、思いきり楽しめる特別な一日',
    'exp.couple.title': '夕暮れカップルプラン',
    'exp.couple.sub': '二人だけのロマンチックな夜時間',
    'exp.family.s1.title': 'フォトスポットで撮影', 'exp.family.s1.desc': '農園内の映えスポットで入場記念の素敵な写真を撮りましょう。',
    'exp.family.s2.title': 'ぶどう・ベリー狩り', 'exp.family.s2.desc': '旬の果物を自分の手でたっぷり収穫。子どもも大人も大喜び！',
    'exp.family.s3.title': 'キッズ遊び場でめいっぱい遊ぶ', 'exp.family.s3.desc': '砂場のショベルカー、ミニ迷路、遊具ゾーンでお子様が思い切り遊べます。',
    'exp.family.s4.title': '池で釣り体験', 'exp.family.s4.desc': '農園の池でのんびりと釣りを楽しみましょう。釣れた魚はそのまま料理します。',
    'exp.family.s5.title': '農園グルメを楽しむ', 'exp.family.s5.desc': '釣った魚のBBQ、バンミー、フレッシュジュース、アイスクリームで豊かな食事タイム。',
    'exp.family.s6.title': '収穫フルーツを購入', 'exp.family.s6.desc': '自分で収穫したぶどうやベリーをお土産として購入してお帰りください。',
    'exp.couple.s1.title': '夕暮れ散歩＆灯籠', 'exp.couple.s1.desc': '農園に灯る柔らかな灯籠の明かりの中をゆっくり二人で歩きます。',
    'exp.couple.s2.title': 'ロマンチック撮影', 'exp.couple.s2.desc': '灯籠と緑に囲まれたフォトスポットで、二人だけの特別な記念写真を。',
    'exp.couple.s3.title': '一緒に釣り', 'exp.couple.s3.desc': 'のんびりと二人で釣りを楽しみましょう。会話も弾む穏やかな時間です。',
    'exp.couple.s4.title': '釣った魚をBBQグリル', 'exp.couple.s4.desc': '釣れた魚を炭火でじっくりグリル。香ばしい香りが食欲をそそります。',
    'exp.couple.s5.title': 'バンミーディナー', 'exp.couple.s5.desc': 'パリッとしたバンミーと農園の食材で、自然の中での特別なディナーを。',
    'exp.couple.s6.title': 'ジェンガゲーム', 'exp.couple.s6.desc': '星空の下、笑い声とともにジェンガを楽しむ二人だけのひとときです。',
    'exp.couple.s7.title': '月見タイム', 'exp.couple.s7.desc': '静かな農園の中、満天の星と月を眺めながら過ごす最高に贅沢な時間。',
    'exp.family.s5b.title': 'バンミー・ドリンク・アイスを楽しむ',
    'exp.family.s5b.desc': 'パリパリのバンミー、農園フルーツジュース、果物たっぷりのアイスクリームでゆったりとしたひとときを。',
    'exp.tag.all': '全員おすすめ', 'exp.tag.seasonal': '季節限定',
    'exp.tag.kids': 'キッズ大好き', 'exp.tag.food': '農園グルメ',
    'exp.tag.souvenir': 'お土産に', 'exp.tag.romantic': 'ロマンチック', 'exp.tag.together': '二人で',
    /* Services — lead & feature bullets */
    'svc.blueberry.lead': '指でそっと摘んだブルーベリーが口の中で弾ける甘酸っぱさ。農園でしか味わえない感動の収穫体験です。',
    'svc.blueberry.f1': '採れたての果実をその場で試食', 'svc.blueberry.f2': '収穫量はそのままお持ち帰り可',
    'svc.grape.lead': '房いっぱいに実ったぶどうを丁寧に手摘みし、農園テラスでゆっくりと味わいましょう。',
    'svc.grape.f1': '完熟ぶどうを手摘み収穫', 'svc.grape.f2': 'テラスでの試食タイム・撮影スポット込み',
    'svc.fishing.lead': '池に糸を垂らして待つ静かな時間。釣れた魚を炭火でじっくり焼く、農園だけの格別な食体験。',
    'svc.fishing.f1': '釣り道具はすべてレンタル込み', 'svc.fishing.f2': '釣った魚を炭火BBQで調理',
    'svc.sand.lead': '本格ショベルカーのおもちゃが揃う夢の砂場。子どもたちの「すごい！」が止まらない特別スペースです。',
    'svc.sand.f1': '大型ショベルカー・クレーン車で遊び放題', 'svc.sand.f2': '安全柵付き・保護者も安心',
    'svc.maze.lead': '農園の緑の中に隠れた小さな迷路。家族で協力して出口を目指す、わくわく探検体験です。',
    'svc.maze.f1': '出口を目指して家族で挑戦', 'svc.maze.f2': '木陰で涼しく、ゆったり楽しめます',
    'svc.photo.lead': '自然光と農園の緑が最高のフィルター。農園内の映えスポットで大切な一枚を残しましょう。',
    'svc.photo.f1': '農園内に複数のフォトスポット設置', 'svc.photo.f2': 'カップル・家族・子ども写真すべて対応',
    'svc.food.lead': 'パリッと焼いたバンミーに揚げ春巻き、農園フルーツのアイスクリーム。農園ならではの贅沢な軽食体験。',
    'svc.food.f1': '本場バンミー（ベトナムバゲット）・揚げ春巻き', 'svc.food.f2': '農園フルーツのアイスクリーム',
    'svc.juice.lead': '農園でその日に摘んだぶどうやブルーベリーを、その場で搾って提供。これ以上新鮮なジュースはありません。',
    'svc.juice.f1': '完全無添加・砂糖不使用のナチュラルジュース', 'svc.juice.f2': '収穫直後の果物を使用、栄養満点',
    'svc.kids.lead': '安全で楽しいキッズスペースで、お子様が自由にのびのびと遊べます。5歳以下は入場無料です。',
    'svc.kids.f1': '遊具・砂場・ミニ滑り台が揃ったエリア', 'svc.kids.f2': '5歳以下無料・保護者同伴でご参加ください',
    'svc.lantern.lead': '夕暮れとともに灯り始める幻想的な灯籠の光。農園を二人で歩くこの時間は、一生の記憶になります。',
    'svc.lantern.f1': '週末限定・日没後に始まるナイトプログラム', 'svc.lantern.f2': 'カップル専用フォトスポット・星空観賞つき',
    'footer.tagline': '自然とともに生きる農園体験',
    'footer.visit': 'アクセス',
    'footer.address': 'ベトナム・ラムドン省ダラット市',
    'footer.hours': '営業時間：毎日 7:00〜18:00',
    'footer.links': 'リンク',
    'footer.newsletter': 'ニュースレター',
    'footer.newsletter.desc': '最新情報をお届けします',
    'footer.email.ph': 'メールアドレス',
    'footer.subscribe': '登録',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': '※ お子様は必ず保護者の方と一緒にご参加ください。アレルギーをお持ちの方は事前にスタッフまでお申し付けください。',
    'services.hero.desc': '果物狩り・BBQ・キッズ遊び場・灯籠散歩など、全10種類の体験をご用意しています。',
    'gallery.hero.desc': 'みどりファームの四季と体験の一コマをご覧ください。',
    'gallery.cat.farm': '農園風景 / FARM', 'gallery.cat.farm.title': '農園の四季',
    'gallery.cat.picking': '果物狩り / PICKING', 'gallery.cat.picking.title': '果物狩り体験',
    'gallery.cat.family': 'ファミリー体験 / FAMILY', 'gallery.cat.family.title': '家族と子どもの笑顔',
    'gallery.cat.couple': 'カップル / COUPLES', 'gallery.cat.couple.title': '灯籠の夜・カップル体験',
    'about.f1t': '100%オーガニック', 'about.f1d': '農薬・化学肥料不使用の安心栽培。大切なお子様にも安全です。',
    'about.f2t': '和の空間', 'about.f2d': '日本庭園の美学を取り入れた、心落ち着く環境です。',
    'about.f3t': '食べ放題', 'about.f3d': '滞在中は収穫した果物を心ゆくまでお楽しみいただけます。',
  },

  vi: {
    'nav.about': 'Về Chúng Tôi', 'nav.services': 'Dịch Vụ',
    'nav.experience': 'Trải Nghiệm', 'nav.gallery': 'Thư Viện Ảnh',
    'nav.pricing': 'Bảng Giá', 'nav.book': 'Đặt Chỗ',

    'hero.slide1.sub': 'Giữa thiên nhiên Đà Lạt',
    'hero.slide1.tagline': 'Khoảnh khắc đặc biệt\ncùng trái cây tươi',
    'hero.slide2.sub': 'Chỉ từ tháng 6 đến tháng 8',
    'hero.slide2.tagline': 'Hái Blueberry\nCuối Tuần Gia Đình',
    'hero.slide3.sub': 'Cuối tuần · Dành cho cặp đôi',
    'hero.slide3.tagline': 'Đêm Đèn Lồng\nCâu Chuyện Đôi Ta',
    'hero.cta.services': 'Xem Dịch Vụ →',
    'hero.cta.book': 'Đặt Chỗ →',

    'concept.jp': '自然とともに、心が潤う農園体験。',
    'concept.en': 'Trải nghiệm nông trại nơi thiên nhiên nuôi dưỡng tâm hồn.',

    'about.label': 'Về Chúng Tôi / ABOUT',
    'about.title': 'Về Midori Farm',
    'about.lead': 'Những trái cây được nuôi dưỡng bởi không khí trong lành và đất đai màu mỡ của Đà Lạt.',
    'about.body': 'Chúng tôi mang đến trải nghiệm nông nghiệp phong cách Nhật Bản tại Đà Lạt, Việt Nam. Hái blueberry, nho, cùng nhiều hoạt động thú vị cho cả gia đình — hãy cùng tạo nên những kỷ niệm khó quên.',
    'about.cta': 'Xem Dịch Vụ →',

    'services.label': 'Dịch Vụ / SERVICES',
    'services.title': 'Menu Trải Nghiệm Tại Vườn',

    'svc.blueberry.season': 'Tháng 6–8',
    'svc.blueberry.jp': 'Hái Blueberry',
    'svc.blueberry.desc': 'Tự tay hái những quả blueberry chín mọng tươi ngon. Trải nghiệm được các em nhỏ yêu thích nhất!',
    'svc.grape.season': 'Tháng 7–9',
    'svc.grape.jp': 'Hái Nho',
    'svc.grape.desc': 'Hái những chùm nho căng mọng và thưởng thức ngay tại sân vườn của chúng tôi.',
    'svc.fishing.season': 'Quanh năm',
    'svc.fishing.jp': 'Câu Cá & Nướng BBQ',
    'svc.fishing.desc': 'Tự câu cá rồi nướng ngay tại chỗ — khoảnh khắc tuyệt vời giữa thiên nhiên.',
    'svc.kids.season': 'Quanh năm · Miễn phí',
    'svc.kids.jp': 'Khu Vui Chơi Trẻ Em',
    'svc.kids.desc': 'Khu vui chơi an toàn riêng cho các bé. Bố mẹ an tâm thư giãn.',
    'svc.lantern.season': 'Cuối tuần · Chiều tối',
    'svc.lantern.jp': 'Dạo Vườn Đèn Lồng',
    'svc.lantern.desc': 'Dạo bộ cùng nhau trong vườn được thắp sáng bởi hàng trăm đèn lồng lung linh khi hoàng hôn buông xuống. Chương trình đặc biệt dành riêng cho các cặp đôi.',
    'svc.more': 'Xem Thêm →',

    'audience.family.label': 'Dành Cho Gia Đình / FOR FAMILIES',
    'audience.family.title': 'Nụ Cười Con Trẻ\nToả Sáng Cuối Tuần',
    'audience.family.desc': 'Các bé vui chơi thỏa thích, cả nhà cùng tận hưởng ân huệ của thiên nhiên.',
    'audience.family.cta': 'Đặt Chỗ Ngay →',
    'audience.couple.label': 'Dành Cho Cặp Đôi / FOR COUPLES',
    'audience.couple.title': 'Đêm Đèn Lồng\nKhoảnh Khắc Của Hai Ta',
    'audience.couple.desc': 'Trong ánh đèn lồng dịu dàng, cùng người thương tạo nên ký ức không bao giờ quên.',
    'audience.couple.cta': 'Xem Chi Tiết →',

    'exp.label': 'Trải Nghiệm / HOW IT WORKS',
    'exp.title': 'Quy Trình Trải Nghiệm',
    'exp.step1.title': 'Đặt Chỗ', 'exp.step1.desc': 'Chọn ngày và đặt chỗ qua form hoặc LINE.',
    'exp.step2.title': 'Đến Vườn', 'exp.step2.desc': 'Cách trung tâm Đà Lạt khoảng 20 phút. Nhân viên đón tiếp bạn.',
    'exp.step3.title': 'Tận Hưởng', 'exp.step3.desc': 'Tự do kết hợp các trải nghiệm theo sở thích.',
    'exp.step4.title': 'Về Nhà Với Quà', 'exp.step4.desc': 'Mang trái cây vừa hái về nhà làm kỷ niệm.',

    'gallery.label': 'Thư Viện Ảnh / GALLERY',
    'gallery.title': 'Khung Cảnh Tại Vườn',

    'stats.visitors': 'Lượt khách mỗi năm', 'stats.services': 'Loại dịch vụ',
    'stats.languages': 'Ngôn ngữ hỗ trợ', 'stats.satisfaction': 'Hài lòng',

    'reviews.label': 'Cảm Nhận / REVIEWS',
    'reviews.title': 'Tiếng Nói Từ Khách Hàng',
    'review.1.text': '「Các con thích mê! Hái blueberry lần đầu tiên, thật sự rất mới lạ và vui!」',
    'review.1.author': '— Gia đình Tanaka',
    'review.2.text': '「Dạo vườn đèn lồng thật lãng mạn. Chúng tôi nhất định sẽ quay lại.」',
    'review.2.author': '— Nguyễn Lan (cặp đôi)',
    'review.3.text': '「Câu cá rồi nướng ngay tại chỗ — tuyệt vời nhất! Nhân viên rất nhiệt tình.」',
    'review.3.author': '— Chen Wei (gia đình)',

    'pricing.label': 'Bảng Giá / PRICING',
    'pricing.title': 'Gói Dịch Vụ',
    'price.per': 'mỗi người', 'price.popular': 'Phổ Biến Nhất', 'price.book': 'Đặt Ngay',
    'price.basic.name': 'Cơ Bản',
    'price.basic.f1': 'Hái 1 loại trái cây', 'price.basic.f2': 'Mang về 100g', 'price.basic.f3': 'Khu vui chơi trẻ em',
    'price.family.name': 'Gia Đình', 'price.family.per': 'tối đa 4 người',
    'price.family.f1': 'Hái 2 loại trái cây', 'price.family.f2': 'Câu cá & BBQ',
    'price.family.f3': 'Mang về 500g', 'price.family.f4': 'Khu vui chơi (miễn phí)',
    'price.couple.name': 'Cặp Đôi', 'price.couple.per': '2 người',
    'price.couple.f1': 'Hái 2 loại trái cây', 'price.couple.f2': 'Dạo vườn đèn lồng', 'price.couple.f3': 'BBQ premium',

    'booking.label': 'Đặt Chỗ / RESERVATION',
    'booking.title': 'Đặt Chỗ Ngay',
    'booking.desc': 'Chọn ngày và gói dịch vụ phù hợp, gửi yêu cầu và chúng tôi sẽ liên hệ xác nhận sớm nhất.',
    'form.name': 'Họ và tên', 'form.email': 'Email', 'form.phone': 'Số điện thoại',
    'form.plan': 'Chọn gói dịch vụ',
    'form.guests1': '1 người', 'form.guests2': '2 người', 'form.guests3': '3 người', 'form.guests4': 'Từ 4 người',
    'form.message': 'Ghi chú / Yêu cầu thêm',
    'form.submit': 'Gửi Yêu Cầu Đặt Chỗ',
    'form.success': 'Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất có thể.',

    /* New services */
    'svc.sand.season': 'Quanh năm', 'svc.sand.jp': 'Bãi Cát & Cần Cẩu',
    'svc.sand.desc': 'Khu bãi cát chuyên dụng với xe cần cẩu, xe xúc đồ chơi cho bé tha hồ vui chơi.',
    'svc.food.jp': 'Góc Ăn Nhẹ & Bánh Mì',
    'svc.food.desc': 'Thưởng thức bánh mì giòn, nem rán thơm ngon và kem mát lạnh kết hợp với trái cây tươi từ vườn.',
    'svc.juice.jp': 'Nước Ép Trái Cây Tươi',
    'svc.juice.desc': 'Nước ép tươi từ nho và blueberry vừa hái trong vườn. Nguyên chất, không thêm đường.',
    'svc.maze.jp': 'Mê Cung Nhỏ',
    'svc.maze.desc': 'Mê cung xanh mướt dành cho các bé khám phá và vui chơi giữa không gian thiên nhiên.',
    'svc.photo.jp': 'Điểm Chụp Ảnh',
    'svc.photo.desc': 'Nhiều góc chụp ảnh đẹp được bố trí khắp vườn. Lưu lại những khoảnh khắc đáng nhớ bên người thân.',
    'svc.food.season': 'Quanh năm',
    'svc.chill.season': 'Cuối tuần · Tối', 'svc.chill.jp': 'Ngắm Trăng & Chill',
    'svc.chill.desc': 'Ngồi thư giãn dưới ánh trăng và bầu trời đầy sao giữa vườn xanh yên tĩnh. Khoảnh khắc bình yên tuyệt đối.',
    'svc.kids.free': 'Trẻ em dưới 5 tuổi được vào cửa hoàn toàn miễn phí.',
    /* Experience flows */
    'exp.tab.family': 'Gia Đình & Bạn Bè', 'exp.tab.couple': 'Cặp Đôi (Buổi Tối)',
    'exp.family.title': 'Trải Nghiệm Gia Đình & Bạn Bè',
    'exp.family.sub': 'Một ngày vui trọn vẹn cho cả người lớn lẫn trẻ nhỏ',
    'exp.couple.title': 'Trải Nghiệm Cặp Đôi Buổi Tối',
    'exp.couple.sub': 'Khoảng thời gian lãng mạn chỉ dành cho hai người',
    'exp.family.s1.title': 'Chụp Ảnh Check-in', 'exp.family.s1.desc': 'Ghé thăm các điểm chụp ảnh đẹp trong vườn và lưu lại kỷ niệm đầu tiên.',
    'exp.family.s2.title': 'Hái Nho & Blueberry', 'exp.family.s2.desc': 'Tự tay hái những trái cây tươi ngon nhất từ vườn — khoảnh khắc yêu thích của mọi người.',
    'exp.family.s3.title': 'Trẻ Em Vui Chơi', 'exp.family.s3.desc': 'Bãi cát cần cẩu, mê cung và khu vui chơi — các bé tha hồ khám phá và chơi đùa.',
    'exp.family.s4.title': 'Câu Cá', 'exp.family.s4.desc': 'Cùng nhau câu cá tại hồ trong vườn. Cá câu được sẽ được chế biến tại chỗ.',
    'exp.family.s5.title': 'Thưởng Thức Bữa Ăn', 'exp.family.s5.desc': 'Ăn cá nướng BBQ, bánh mì, nước ép trái cây tươi và kem kết hợp hoa quả.',
    'exp.family.s6.title': 'Mua Quà Về', 'exp.family.s6.desc': 'Mua nho và blueberry vừa hái mang về làm quà cho người thân.',
    'exp.couple.s1.title': 'Dạo Vườn Đèn Lồng', 'exp.couple.s1.desc': 'Dạo bước trong vườn lung linh ánh đèn lồng khi hoàng hôn buông xuống.',
    'exp.couple.s2.title': 'Chụp Ảnh Lãng Mạn', 'exp.couple.s2.desc': 'Chụp ảnh tại các góc đẹp được trang trí đặc biệt cho các cặp đôi.',
    'exp.couple.s3.title': 'Câu Cá Cùng Nhau', 'exp.couple.s3.desc': 'Bên nhau câu cá trong không khí buổi tối yên tĩnh và thơ mộng.',
    'exp.couple.s4.title': 'Nướng Cá BBQ', 'exp.couple.s4.desc': 'Cùng nhau nướng cá trên than hồng, hít hà mùi thơm của bữa ăn đặc biệt.',
    'exp.couple.s5.title': 'Ăn Bánh Mì Buổi Tối', 'exp.couple.s5.desc': 'Thưởng thức bánh mì giòn cùng nguyên liệu tươi từ vườn trong không khí lãng mạn.',
    'exp.couple.s6.title': 'Chơi Rút Gỗ (Jenga)', 'exp.couple.s6.desc': 'Ngồi dưới bầu trời đêm, cùng nhau chơi Jenga và cười vui bên nhau.',
    'exp.couple.s7.title': 'Ngắm Trăng', 'exp.couple.s7.desc': 'Kết thúc bằng khoảnh khắc lặng yên ngắm trăng sao giữa vườn xanh tĩnh lặng.',
    'exp.family.s5b.title': 'Thưởng thức bánh mì, đồ uống & kem',
    'exp.family.s5b.desc': 'Bánh mì giòn rụm, nước ép trái cây tươi từ vườn và kem hoa quả ngọt lạnh — một buổi chiều thư thái tuyệt vời.',
    'exp.tag.all': 'Cho tất cả mọi người', 'exp.tag.seasonal': 'Theo mùa',
    'exp.tag.kids': 'Trẻ em thích', 'exp.tag.food': 'Ẩm thực vườn',
    'exp.tag.souvenir': 'Quà lưu niệm', 'exp.tag.romantic': 'Lãng mạn', 'exp.tag.together': 'Cùng nhau',
    /* Services — lead & feature bullets */
    'svc.blueberry.lead': 'Tự tay hái từng quả blueberry chín mọng, cảm nhận vị chua ngọt tươi nguyên ngay tại vườn.',
    'svc.blueberry.f1': 'Thưởng thức tại vườn ngay sau khi hái', 'svc.blueberry.f2': 'Mang về phần đã hái được',
    'svc.grape.lead': 'Hái từng chùm nho căng mọng và thưởng thức ngay tại sân hiên của vườn cùng gia đình.',
    'svc.grape.f1': 'Hái nho chín ngay tại vườn', 'svc.grape.f2': 'Khu thưởng thức & chụp ảnh tại chỗ',
    'svc.fishing.lead': 'Ngồi câu cá bên hồ yên bình rồi nướng ngay trên than hồng — trải nghiệm ẩm thực độc đáo giữa thiên nhiên.',
    'svc.fishing.f1': 'Đầy đủ dụng cụ câu cá, không cần mang theo', 'svc.fishing.f2': 'Cá câu được nướng BBQ tại chỗ',
    'svc.sand.lead': 'Khu bãi cát với xe cần cẩu, xe xúc đồ chơi thật sự — không gian vui chơi mà các bé không muốn rời đi.',
    'svc.sand.f1': 'Xe xúc, xe cần cẩu cỡ lớn vui chơi thoải mái', 'svc.sand.f2': 'Có hàng rào an toàn, phụ huynh yên tâm',
    'svc.maze.lead': 'Mê cung nhỏ ẩn trong không gian xanh mướt của vườn — thử thách vui nhộn cho cả gia đình cùng khám phá.',
    'svc.maze.f1': 'Cùng gia đình tìm đường ra', 'svc.maze.f2': 'Mát mẻ, có bóng cây che phủ tự nhiên',
    'svc.photo.lead': 'Ánh sáng tự nhiên và không gian xanh của vườn tạo nên những bức ảnh đẹp không cần chỉnh sửa.',
    'svc.photo.f1': 'Nhiều điểm chụp ảnh đẹp được bố trí trong vườn', 'svc.photo.f2': 'Phù hợp cho cặp đôi, gia đình và trẻ em',
    'svc.food.lead': 'Bánh mì giòn, nem rán thơm và kem hoa quả ngọt mát — góc ăn nhẹ đậm chất vườn trái cây Đà Lạt.',
    'svc.food.f1': 'Bánh mì Việt Nam giòn rụm · Nem rán thơm ngon', 'svc.food.f2': 'Kem kết hợp hoa quả tươi từ vườn',
    'svc.juice.lead': 'Nho và blueberry vừa hái trong ngày được ép tươi ngay tại chỗ — ly nước ngon nhất không cần thêm gì.',
    'svc.juice.f1': 'Nguyên chất 100%, không đường, không chất bảo quản', 'svc.juice.f2': 'Trái cây vừa hái, đảm bảo tươi nhất',
    'svc.kids.lead': 'Khu vui chơi an toàn, vui nhộn để các bé thỏa thích vui đùa. Trẻ em dưới 5 tuổi vào hoàn toàn miễn phí.',
    'svc.kids.f1': 'Đồ chơi, bãi cát và cầu trượt mini đầy đủ', 'svc.kids.f2': 'Miễn phí cho trẻ dưới 5 tuổi · Có người lớn đi kèm',
    'svc.lantern.lead': 'Khi hoàng hôn buông xuống, hàng trăm đèn lồng thắp sáng cả vườn — khung cảnh lãng mạn chỉ dành cho hai người.',
    'svc.lantern.f1': 'Chỉ cuối tuần, bắt đầu sau khi mặt trời lặn', 'svc.lantern.f2': 'Điểm chụp ảnh cặp đôi & ngắm sao',
    'footer.tagline': 'Trải nghiệm nông trại cùng thiên nhiên',
    'footer.visit': 'Đến Chúng Tôi',
    'footer.address': 'Thành phố Đà Lạt, Lâm Đồng, Việt Nam',
    'footer.hours': 'Giờ mở cửa: 7:00–18:00 hằng ngày',
    'footer.links': 'Liên Kết',
    'footer.newsletter': 'Bản Tin',
    'footer.newsletter.desc': 'Nhận thông tin mới nhất từ chúng tôi',
    'footer.email.ph': 'Địa chỉ email',
    'footer.subscribe': 'Đăng Ký',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': '※ Trẻ em cần có người lớn đi kèm. Quý khách có dị ứng thực phẩm vui lòng thông báo cho nhân viên trước khi tham gia.',
    'services.hero.desc': 'Chúng tôi cung cấp 10 loại trải nghiệm: hái trái cây, BBQ, khu vui chơi trẻ em, dạo vườn đèn lồng và nhiều hơn nữa.',
    'gallery.hero.desc': 'Ngắm nhìn khung cảnh bốn mùa và những khoảnh khắc trải nghiệm tại Midori Farm.',
    'gallery.cat.farm': 'Cảnh Vườn / FARM', 'gallery.cat.farm.title': 'Bốn Mùa Trong Vườn',
    'gallery.cat.picking': 'Hái Trái Cây / PICKING', 'gallery.cat.picking.title': 'Trải Nghiệm Hái Trái Cây',
    'gallery.cat.family': 'Gia Đình / FAMILY', 'gallery.cat.family.title': 'Nụ Cười Gia Đình',
    'gallery.cat.couple': 'Cặp Đôi / COUPLES', 'gallery.cat.couple.title': 'Đêm Đèn Lồng & Trải Nghiệm Cặp Đôi',
    'about.f1t': '100% Hữu Cơ', 'about.f1d': 'Không thuốc trừ sâu, không phân bón hóa học. An toàn cho cả trẻ nhỏ.',
    'about.f2t': 'Không Gian Nhật Bản', 'about.f2d': 'Thiết kế theo phong cách vườn Nhật, tạo cảm giác bình yên, thư thái.',
    'about.f3t': 'Thoải Mái Thưởng Thức', 'about.f3d': 'Tự do thưởng thức trái cây vừa hái trong suốt thời gian tham quan.',
  },

  en: {
    'nav.about': 'About', 'nav.services': 'Services',
    'nav.experience': 'Experience', 'nav.gallery': 'Gallery',
    'nav.pricing': 'Pricing', 'nav.book': 'Book Now',

    'hero.slide1.sub': 'In the heart of Da Lat nature',
    'hero.slide1.tagline': 'Special moments\nshared with fruit',
    'hero.slide2.sub': 'June – August only',
    'hero.slide2.tagline': 'Blueberry Picking\nFamily Weekend',
    'hero.slide3.sub': 'Weekends · Couples only',
    'hero.slide3.tagline': 'Lantern Evening\nA Story for Two',
    'hero.cta.services': 'Explore Experiences →',
    'hero.cta.book': 'Book Now →',

    'concept.jp': '自然とともに、心が潤う農園体験。',
    'concept.en': 'A farm experience where nature nourishes the soul.',

    'about.label': 'About Us / ABOUT',
    'about.title': 'About Midori Farm',
    'about.lead': 'Fruits nurtured by the crisp air and rich soil of Da Lat.',
    'about.body': "We bring Japanese-style orchard experiences to Da Lat, Vietnam. Through blueberry picking, grape harvesting, and family activities, we create unforgettable memories.",
    'about.cta': 'Explore Services →',

    'services.label': 'Services / SERVICES',
    'services.title': 'Farm Experience Menu',

    'svc.blueberry.season': 'June – August',
    'svc.blueberry.jp': 'Blueberry Picking',
    'svc.blueberry.desc': 'Hand-pick ripe blueberries fresh from the vine. A classic experience kids absolutely love.',
    'svc.grape.season': 'July – September',
    'svc.grape.jp': 'Grape Picking',
    'svc.grape.desc': 'Harvest plump grape clusters and enjoy them on our farm terrace.',
    'svc.fishing.season': 'Year-round',
    'svc.fishing.jp': 'Fishing & BBQ',
    'svc.fishing.desc': 'Catch your own fish and grill it right on the spot — the perfect outdoor experience.',
    'svc.kids.season': 'Year-round · Free',
    'svc.kids.jp': "Kids' Play Area",
    'svc.kids.desc': 'A dedicated safe play zone for little ones so parents can relax and enjoy.',
    'svc.lantern.season': 'Weekends · Evenings',
    'svc.lantern.jp': 'Lantern Evening Walk',
    'svc.lantern.desc': 'Stroll through the farm wrapped in the warm glow of lanterns at dusk. A magical evening program exclusively for couples.',
    'svc.more': 'Learn More →',

    'audience.family.label': 'For Families / FOR FAMILIES',
    'audience.family.title': "Children's Smiles\nIlluminate the Weekend",
    'audience.family.desc': 'Kids play freely while the whole family enjoys the bounty of nature together.',
    'audience.family.cta': 'Book Now →',
    'audience.couple.label': 'For Couples / FOR COUPLES',
    'audience.couple.title': 'Lantern Evening\nTime for Two',
    'audience.couple.desc': 'In the gentle glow of lanterns, spend unforgettable time with the one you love.',
    'audience.couple.cta': 'Learn More →',

    'exp.label': 'Experience / HOW IT WORKS',
    'exp.title': 'How It Works',
    'exp.step1.title': 'Book', 'exp.step1.desc': 'Choose a date and book via our form or LINE.',
    'exp.step2.title': 'Arrive', 'exp.step2.desc': 'About 20 minutes from Da Lat city. Our staff will welcome you.',
    'exp.step3.title': 'Enjoy', 'exp.step3.desc': 'Mix and match experiences freely at your own pace.',
    'exp.step4.title': 'Take Home', 'exp.step4.desc': 'Bring your freshly harvested fruit home as a souvenir.',

    'gallery.label': 'Gallery / GALLERY',
    'gallery.title': 'Farm Scenery',

    'stats.visitors': 'Annual visitors', 'stats.services': 'Experiences',
    'stats.languages': 'Languages', 'stats.satisfaction': 'Satisfaction',

    'reviews.label': 'Reviews / REVIEWS',
    'reviews.title': 'Guest Voices',
    'review.1.text': '"The kids were overjoyed. Blueberry picking was a brand new experience — so refreshing!"',
    'review.1.author': '— Tanaka family',
    'review.2.text': '"The lantern walk was truly romantic and beautiful. We definitely want to come back."',
    'review.2.author': '— Nguyễn Lan (couple)',
    'review.3.text': '"Grilling fish we caught ourselves was the highlight. The staff were so kind."',
    'review.3.author': '— Chen Wei (family)',

    'pricing.label': 'Pricing / PRICING',
    'pricing.title': 'Pricing Plans',
    'price.per': 'per person', 'price.popular': 'Most Popular', 'price.book': 'Book Now',
    'price.basic.name': 'Basic',
    'price.basic.f1': '1 picking activity', 'price.basic.f2': 'Take home 100g', 'price.basic.f3': "Kids' play area",
    'price.family.name': 'Family', 'price.family.per': 'up to 4 people',
    'price.family.f1': '2 picking activities', 'price.family.f2': 'Fishing & BBQ set',
    'price.family.f3': 'Take home 500g', 'price.family.f4': "Kids' area (free)",
    'price.couple.name': 'Couple', 'price.couple.per': '2 people',
    'price.couple.f1': '2 picking activities', 'price.couple.f2': 'Lantern evening walk', 'price.couple.f3': 'Premium BBQ set',

    'booking.label': 'Reservation / RESERVATION',
    'booking.title': 'Make a Reservation',
    'booking.desc': 'Select your preferred date and plan, and submit your request. We will confirm shortly.',
    'form.name': 'Full Name', 'form.email': 'Email', 'form.phone': 'Phone Number',
    'form.plan': 'Select a plan',
    'form.guests1': '1 person', 'form.guests2': '2 people', 'form.guests3': '3 people', 'form.guests4': '4 or more',
    'form.message': 'Requests / Notes',
    'form.submit': 'Send Reservation Request',
    'form.success': 'Thank you! We will be in touch shortly to confirm.',

    /* New services */
    'svc.sand.season': 'Year-round', 'svc.sand.jp': 'Sand Play & Excavator',
    'svc.sand.desc': 'A dedicated sand play area with toy excavators and cranes. Kids can dig, build, and play to their hearts\' content.',
    'svc.food.jp': 'Food Corner — Bánh Mì & Snacks',
    'svc.food.desc': 'Enjoy crispy bánh mì (Vietnamese baguette), fried spring rolls, and ice cream paired with freshly picked farm fruits.',
    'svc.juice.jp': 'Fresh Fruit Juice',
    'svc.juice.desc': 'Freshly pressed juice made from grapes and blueberries harvested right here at the farm. Pure, natural, no added sugar.',
    'svc.maze.jp': 'Mini Maze',
    'svc.maze.desc': 'A charming little maze nestled in the greenery. Kids love exploring and finding their way through.',
    'svc.photo.jp': 'Photo Spots',
    'svc.photo.desc': 'Beautifully arranged photo spots throughout the farm. Capture precious memories in a stunning natural setting.',
    'svc.food.season': 'Year-round',
    'svc.chill.season': 'Weekends · Evenings', 'svc.chill.jp': 'Moon Gazing & Chill',
    'svc.chill.desc': 'Unwind under the moonlight and starry sky in our peaceful garden. A moment of pure stillness.',
    'svc.kids.free': 'Children under 5 enter completely free of charge.',
    /* Experience flows */
    'exp.tab.family': 'Families & Friends', 'exp.tab.couple': 'Couples (Evening)',
    'exp.family.title': 'Family & Friends Day Experience',
    'exp.family.sub': 'A full day of joy for kids and adults alike',
    'exp.couple.title': 'Romantic Couples Evening',
    'exp.couple.sub': 'A magical evening designed just for two',
    'exp.family.s1.title': 'Photo Check-in', 'exp.family.s1.desc': 'Start with stunning farm photo spots — capture your first memory of the day.',
    'exp.family.s2.title': 'Grape & Berry Picking', 'exp.family.s2.desc': 'Hand-pick the ripest fruits of the season. Everyone\'s favorite moment!',
    'exp.family.s3.title': 'Kids Playtime', 'exp.family.s3.desc': 'Sand excavators, a mini maze, and a play zone — little ones go wild with excitement.',
    'exp.family.s4.title': 'Fishing in the Pond', 'exp.family.s4.desc': 'Spend time fishing together at the farm pond. The catch goes straight to the grill!',
    'exp.family.s5.title': 'Farm Feast', 'exp.family.s5.desc': 'BBQ fish, bánh mì, fresh fruit juice, and ice cream with farm fruits — a proper feast.',
    'exp.family.s6.title': 'Buy Fruit to Take Home', 'exp.family.s6.desc': 'Purchase your freshly picked grapes and blueberries as gifts for loved ones back home.',
    'exp.couple.s1.title': 'Lantern Garden Walk', 'exp.couple.s1.desc': 'Stroll through the lantern-lit farm as dusk falls — soft, warm, and wonderfully romantic.',
    'exp.couple.s2.title': 'Romantic Photo Session', 'exp.couple.s2.desc': 'Capture beautiful moments at specially decorated couple photo spots.',
    'exp.couple.s3.title': 'Fishing Together', 'exp.couple.s3.desc': 'Quietly fish side by side in the evening calm — simple, peaceful, and unexpectedly fun.',
    'exp.couple.s4.title': 'BBQ Grill', 'exp.couple.s4.desc': 'Grill your catch over charcoal together and enjoy the delicious aromas of the evening.',
    'exp.couple.s5.title': 'Bánh Mì Dinner', 'exp.couple.s5.desc': 'A warm, rustic dinner with crispy bánh mì and fresh farm ingredients under the stars.',
    'exp.couple.s6.title': 'Jenga Game', 'exp.couple.s6.desc': 'Laugh and play Jenga under the night sky — because the best evenings are simple ones.',
    'exp.couple.s7.title': 'Moon Gazing', 'exp.couple.s7.desc': 'End with a quiet moment gazing at the moon and stars above the peaceful farm.',
    'exp.family.s5b.title': 'Enjoy Bánh Mì, Drinks & Ice Cream',
    'exp.family.s5b.desc': 'Crispy bánh mì, farm-fresh fruit juice, and fruit-loaded ice cream — a leisurely afternoon treat.',
    'exp.tag.all': 'For Everyone', 'exp.tag.seasonal': 'Seasonal',
    'exp.tag.kids': 'Kids Love It', 'exp.tag.food': 'Farm Cuisine',
    'exp.tag.souvenir': 'Souvenir', 'exp.tag.romantic': 'Romantic', 'exp.tag.together': 'For Two',
    /* Services — lead & feature bullets */
    'svc.blueberry.lead': 'Pluck plump, ripe blueberries with your own hands and taste that burst of sweetness right in the field.',
    'svc.blueberry.f1': 'Pick and taste fresh on the spot', 'svc.blueberry.f2': 'Take your harvest home with you',
    'svc.grape.lead': 'Harvest heavy grape clusters by hand and savour them on our farm terrace with your family.',
    'svc.grape.f1': 'Hand-pick ripe grapes fresh from the vine', 'svc.grape.f2': 'Terrace tasting session & photo spot included',
    'svc.fishing.lead': 'Cast your line into a peaceful pond, then grill your catch over charcoal — a uniquely rewarding farm experience.',
    'svc.fishing.f1': 'Full fishing gear provided — no need to bring anything', 'svc.fishing.f2': 'Grill your catch as BBQ right on-site',
    'svc.sand.lead': 'A dream sandbox full of real-sized toy excavators and cranes — kids simply never want to leave.',
    'svc.sand.f1': 'Large toy excavators & cranes for endless play', 'svc.sand.f2': 'Safely fenced area — parents can relax nearby',
    'svc.maze.lead': 'A charming little maze nestled in the greenery, waiting for curious kids and families to find their way through.',
    'svc.maze.f1': 'Work together as a family to find the exit', 'svc.maze.f2': 'Shaded by lush trees — cool and comfortable',
    'svc.photo.lead': 'Natural light and lush farm scenery are the best filters. Our photo spots help you create memories worth keeping.',
    'svc.photo.f1': 'Multiple photo spots set up throughout the farm', 'svc.photo.f2': 'Great for couples, families, and kids alike',
    'svc.food.lead': 'Crispy bánh mì, golden spring rolls, and fruit-topped ice cream — a delightful farm snack corner unlike any other.',
    'svc.food.f1': 'Authentic bánh mì & fried spring rolls', 'svc.food.f2': 'Farm fruit ice cream',
    'svc.juice.lead': 'Grapes and blueberries picked that same day, pressed fresh right here at the farm. Pure, natural, and delicious.',
    'svc.juice.f1': '100% natural — no sugar, no preservatives', 'svc.juice.f2': 'Made from same-day harvest fruit',
    'svc.kids.lead': 'A safe, fun play zone where children can run free. Kids under 5 enter completely free of charge.',
    'svc.kids.f1': 'Play equipment, sandbox & mini slide all included', 'svc.kids.f2': 'Free for under-5s · Adult supervision required',
    'svc.lantern.lead': 'As dusk falls, hundreds of lanterns illuminate the farm — a breathtaking romantic setting created just for two.',
    'svc.lantern.f1': 'Weekends only — begins at sunset', 'svc.lantern.f2': 'Couple photo spots & star gazing included',
    'footer.tagline': 'Farm experiences in harmony with nature',
    'footer.visit': 'Visit Us',
    'footer.address': 'Da Lat City, Lam Dong, Vietnam',
    'footer.hours': 'Hours: Daily 7:00–18:00',
    'footer.links': 'Links',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Get our latest updates',
    'footer.email.ph': 'Email address',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': '※ Children must be accompanied by an adult at all times. Please inform staff in advance of any food allergies.',
    'services.hero.desc': 'We offer 10 experiences: fruit picking, BBQ, kids play area, lantern evening walks and more.',
    'gallery.hero.desc': 'Explore the seasons and memorable experiences at Midori Farm through our gallery.',
    'gallery.cat.farm': 'Farm Scenery / FARM', 'gallery.cat.farm.title': 'Farm Through the Seasons',
    'gallery.cat.picking': 'Fruit Picking / PICKING', 'gallery.cat.picking.title': 'Fruit Picking Experience',
    'gallery.cat.family': 'Family Fun / FAMILY', 'gallery.cat.family.title': "Children's Smiles & Family Joy",
    'gallery.cat.couple': 'Couples / COUPLES', 'gallery.cat.couple.title': 'Lantern Evenings & Couple Experiences',
    'about.f1t': '100% Organic', 'about.f1d': 'No pesticides or chemical fertilisers — safe and wholesome for children.',
    'about.f2t': 'Japanese-Style Spaces', 'about.f2d': 'Inspired by Japanese garden aesthetics for a calm, restorative atmosphere.',
    'about.f3t': 'Eat as You Pick', 'about.f3d': 'Enjoy the fruits you harvest freely throughout your visit.',
  },

  zh: {
    'nav.about': '关于我们', 'nav.services': '体验项目',
    'nav.experience': '体验流程', 'nav.gallery': '照片库',
    'nav.pricing': '价格', 'nav.book': '立即预约',

    'hero.slide1.sub': '在大叻的大自然中',
    'hero.slide1.tagline': '与水果共度\n特别时光',
    'hero.slide2.sub': '仅限6月至8月',
    'hero.slide2.tagline': '蓝莓采摘\n家庭周末',
    'hero.slide3.sub': '周末·情侣专属',
    'hero.slide3.tagline': '灯笼之夜\n属于两人的故事',
    'hero.cta.services': '查看体验 →',
    'hero.cta.book': '立即预约 →',

    'concept.jp': '自然とともに、心が潤う農園体験。',
    'concept.en': '大自然滋养心灵的农园体验。',

    'about.label': '关于我们 / ABOUT',
    'about.title': '关于 Midori Farm',
    'about.lead': '在大叻清新的空气和丰沃土壤中孕育的水果。',
    'about.body': '我们将日式农园体验带到越南大叻。通过蓝莓采摘、葡萄收获以及各种家庭活动，与您一起创造难忘的回忆。',
    'about.cta': '查看体验项目 →',

    'services.label': '体验项目 / SERVICES',
    'services.title': '农园体验菜单',

    'svc.blueberry.season': '6月–8月',
    'svc.blueberry.jp': '蓝莓采摘',
    'svc.blueberry.desc': '亲手摘下新鲜成熟的蓝莓。孩子们最喜爱的经典体验！',
    'svc.grape.season': '7月–9月',
    'svc.grape.jp': '葡萄采摘',
    'svc.grape.desc': '采摘饱满的葡萄串，在农园露台上尽情品尝。',
    'svc.fishing.season': '全年开放',
    'svc.fishing.jp': '钓鱼＆烧烤',
    'svc.fishing.desc': '钓鱼后立即炭火烧烤——在大自然中度过最美好的时光。',
    'svc.kids.season': '全年·免费',
    'svc.kids.jp': '儿童游乐区',
    'svc.kids.desc': '专为小朋友打造的安全游乐空间，让父母也能放心休闲。',
    'svc.lantern.season': '周末·傍晚',
    'svc.lantern.jp': '灯笼黄昏漫步',
    'svc.lantern.desc': '在柔和灯笼光芒环绕的农园中，两人缓缓漫步的黄昏体验。专为情侣打造的浪漫特别项目。',
    'svc.more': '了解更多 →',

    'audience.family.label': '家庭专属 / FOR FAMILIES',
    'audience.family.title': '孩子的笑容\n照亮周末时光',
    'audience.family.desc': '孩子尽情玩耍，全家人共享大自然的馈赠，度过特别的假日。',
    'audience.family.cta': '立即预约 →',
    'audience.couple.label': '情侣专属 / FOR COUPLES',
    'audience.couple.title': '灯笼之夜\n专属两人的时光',
    'audience.couple.desc': '在柔和灯笼光芒中，与最爱的人共度难忘时刻。',
    'audience.couple.cta': '了解详情 →',

    'exp.label': '体验流程 / HOW IT WORKS',
    'exp.title': '体验流程',
    'exp.step1.title': '预约', 'exp.step1.desc': '通过表单或LINE选择日期并完成预约。',
    'exp.step2.title': '抵达农园', 'exp.step2.desc': '距大叻市区约20分钟车程，工作人员热情迎接。',
    'exp.step3.title': '享受体验', 'exp.step3.desc': '自由组合喜爱的体验项目，尽情享受。',
    'exp.step4.title': '带伴手礼回家', 'exp.step4.desc': '将刚采摘的水果直接带回家留作纪念。',

    'gallery.label': '照片库 / GALLERY',
    'gallery.title': '农园风景',

    'stats.visitors': '年访客量', 'stats.services': '体验项目',
    'stats.languages': '支持语言', 'stats.satisfaction': '满意度',

    'reviews.label': '顾客评价 / REVIEWS',
    'reviews.title': '来园者的声音',
    'review.1.text': '「孩子们非常开心。蓝莓采摘是第一次体验，感觉非常新鲜！」',
    'review.1.author': '— 田中一家',
    'review.2.text': '「灯笼漫步真的非常浪漫美好。我们一定还会再来。」',
    'review.2.author': '— Nguyễn Lan（情侣）',
    'review.3.text': '「自己钓的鱼当场烤来吃，太棒了！工作人员也非常亲切。」',
    'review.3.author': '— Chen Wei（家庭）',

    'pricing.label': '价格 / PRICING',
    'pricing.title': '价格套餐',
    'price.per': '每人', 'price.popular': '最受欢迎', 'price.book': '立即预约',
    'price.basic.name': '基础套餐',
    'price.basic.f1': '1种采摘体验', 'price.basic.f2': '带走100g', 'price.basic.f3': '儿童游乐区',
    'price.family.name': '家庭套餐', 'price.family.per': '最多4人',
    'price.family.f1': '2种采摘体验', 'price.family.f2': '钓鱼&烧烤套餐',
    'price.family.f3': '带走500g', 'price.family.f4': '儿童游乐区（免费）',
    'price.couple.name': '情侣套餐', 'price.couple.per': '2人',
    'price.couple.f1': '2种采摘体验', 'price.couple.f2': '灯笼黄昏漫步', 'price.couple.f3': '高级烧烤套餐',

    'booking.label': '立即预约 / RESERVATION',
    'booking.title': '在线预约',
    'booking.desc': '选择您心仪的日期和套餐，提交申请后我们将尽快确认联系。',
    'form.name': '姓名', 'form.email': '邮箱', 'form.phone': '联系电话',
    'form.plan': '选择套餐',
    'form.guests1': '1人', 'form.guests2': '2人', 'form.guests3': '3人', 'form.guests4': '4人以上',
    'form.message': '备注/特殊要求',
    'form.submit': '提交预约申请',
    'form.success': '感谢您！我们将尽快联系确认。',

    /* New services */
    'svc.sand.season': '全年开放', 'svc.sand.jp': '沙坑＆挖掘机玩具',
    'svc.sand.desc': '配备挖掘机和吊车玩具的专属沙坑区，让小朋友尽情挖掘、堆砌，玩得不亦乐乎。',
    'svc.food.jp': '美食角——越式法棍＆小吃',
    'svc.food.desc': '香脆越式法棍（bánh mì）、炸春卷，搭配新鲜采摘的水果冰淇淋，让您大快朵颐。',
    'svc.juice.jp': '鲜榨果汁',
    'svc.juice.desc': '将农园现摘的葡萄和蓝莓现场压榨，纯天然无添加，感受最真实的果园滋味。',
    'svc.maze.jp': '儿童迷宫',
    'svc.maze.desc': '隐藏在绿意中的小迷宫，孩子们最爱的探险乐园。',
    'svc.photo.jp': '拍照打卡点',
    'svc.photo.desc': '农园内设有多处精心布置的打卡拍照点，留下美好记忆。',
    'svc.food.season': '全年开放',
    'svc.chill.season': '周末·夜间', 'svc.chill.jp': '赏月静享时光',
    'svc.chill.desc': '在繁星与月光下，静静地坐在宁静的农园中，让心灵得到真正的放松与宁静。',
    'svc.kids.free': '5岁以下儿童免费入场。',
    /* Experience flows */
    'exp.tab.family': '家庭与朋友', 'exp.tab.couple': '情侣（傍晚）',
    'exp.family.title': '家庭与朋友一日体验',
    'exp.family.sub': '大人孩子都能尽兴的美好一天',
    'exp.couple.title': '情侣浪漫傍晚体验',
    'exp.couple.sub': '专为两人打造的浪漫夜晚时光',
    'exp.family.s1.title': '打卡拍照', 'exp.family.s1.desc': '在农园各处精心设计的打卡点留下美好的第一张合照。',
    'exp.family.s2.title': '采摘葡萄和蓝莓', 'exp.family.s2.desc': '亲手摘下最成熟的时令水果，全家人的最爱体验！',
    'exp.family.s3.title': '儿童游乐时间', 'exp.family.s3.desc': '沙坑挖掘机、小迷宫、游乐区——孩子们玩得不亦乐乎！',
    'exp.family.s4.title': '池边钓鱼', 'exp.family.s4.desc': '在农园池塘一起钓鱼，钓到的鱼当场料理！',
    'exp.family.s5.title': '农园美食盛宴', 'exp.family.s5.desc': '烤鱼BBQ、越式法棍、鲜榨果汁和水果冰淇淋，丰盛的一餐！',
    'exp.family.s6.title': '购买水果伴手礼', 'exp.family.s6.desc': '将自己采摘的葡萄和蓝莓购买带回，送给亲朋好友。',
    'exp.couple.s1.title': '灯笼花园漫步', 'exp.couple.s1.desc': '在夕阳西沉时，漫步于灯笼点缀的农园，浪漫又温馨。',
    'exp.couple.s2.title': '浪漫拍照留念', 'exp.couple.s2.desc': '在专为情侣布置的拍照点，留下属于两人的珍贵瞬间。',
    'exp.couple.s3.title': '一起钓鱼', 'exp.couple.s3.desc': '在宁静的夜晚，肩并肩静静地钓鱼，享受简单的幸福。',
    'exp.couple.s4.title': '烤鱼BBQ', 'exp.couple.s4.desc': '一起将钓到的鱼炭火慢烤，香气四溢，令人期待。',
    'exp.couple.s5.title': '越式法棍晚餐', 'exp.couple.s5.desc': '在星空下，品尝香脆法棍与农园新鲜食材打造的特别晚餐。',
    'exp.couple.s6.title': '叠叠乐游戏', 'exp.couple.s6.desc': '在夜空下玩叠叠乐，笑声连连，尽享轻松愉快的时光。',
    'exp.couple.s7.title': '赏月时刻', 'exp.couple.s7.desc': '以一段静谧的赏月时光画下完美句点，让心灵在自然中得到安宁。',
    'exp.family.s5b.title': '享用越式法棍、饮品与冰淇淋',
    'exp.family.s5b.desc': '香脆法棍、农园新鲜果汁，加上满是水果的冰淇淋，一个悠闲惬意的下午茶时光。',
    'exp.tag.all': '全员推荐', 'exp.tag.seasonal': '季节限定',
    'exp.tag.kids': '孩子最爱', 'exp.tag.food': '农园美食',
    'exp.tag.souvenir': '伴手礼', 'exp.tag.romantic': '浪漫时刻', 'exp.tag.together': '两人同行',
    /* Services — lead & feature bullets */
    'svc.blueberry.lead': '亲手摘下一颗颗饱满成熟的蓝莓，感受它在口中迸发的酸甜——这是只有在农园才能体验的感动。',
    'svc.blueberry.f1': '采摘后可立即在农园内品尝', 'svc.blueberry.f2': '收获的蓝莓可直接带回家',
    'svc.grape.lead': '精心挑选沉甸甸的葡萄串，手工采摘后在农园露台上细细品味，一起享受这份自然的馈赠。',
    'svc.grape.f1': '亲手采摘完熟葡萄', 'svc.grape.f2': '露台品尝时间及拍照区',
    'svc.fishing.lead': '在宁静的池塘边垂钓，再把钓到的鱼在炭火上慢慢烤香——这是只有在农园才能体验的美食之旅。',
    'svc.fishing.f1': '全套钓鱼装备齐全，无需自备', 'svc.fishing.f2': '钓到的鱼可当场炭火烧烤',
    'svc.sand.lead': '梦幻沙坑里配备了大型挖掘机和吊车玩具，孩子们一玩就根本停不下来！',
    'svc.sand.f1': '大型挖掘机与吊车玩具尽情玩耍', 'svc.sand.f2': '安全围栏，家长可放心休息',
    'svc.maze.lead': '隐藏在绿意盎然之中的迷宫，是全家人一起探索、合作前进的欢乐体验。',
    'svc.maze.f1': '全家合力寻找出口', 'svc.maze.f2': '树荫遮蔽，凉爽舒适',
    'svc.photo.lead': '自然光与农园绿意就是最好的滤镜，我们精心设置的拍照点让每一张照片都成为珍贵回忆。',
    'svc.photo.f1': '农园内设有多处精心布置的打卡点', 'svc.photo.f2': '适合情侣、家庭及亲子拍照留念',
    'svc.food.lead': '香脆越式法棍、炸春卷，加上农园水果冰淇淋——农园美食角带来的是无与伦比的美味体验。',
    'svc.food.f1': '正宗越南法棍（bánh mì）· 炸春卷', 'svc.food.f2': '农园水果冰淇淋',
    'svc.juice.lead': '用当天采摘的葡萄和蓝莓现场压榨，无添加、无防腐剂，喝到的是最真实的农园味道。',
    'svc.juice.f1': '100%天然，不加糖、不含防腐剂', 'svc.juice.f2': '使用当日采摘的新鲜水果',
    'svc.kids.lead': '专为小朋友设计的安全游乐空间，尽情奔跑玩耍。5岁以下儿童免费入场。',
    'svc.kids.f1': '游乐设施、沙坑与迷你滑梯一应俱全', 'svc.kids.f2': '5岁以下免费·须有成人陪同',
    'svc.lantern.lead': '夜幕降临，数百盏灯笼将农园照亮——那片浪漫而温柔的光芒，是专为两人打造的梦幻舞台。',
    'svc.lantern.f1': '仅限周末，日落后开始的夜间特别项目', 'svc.lantern.f2': '情侣专用拍照点及星空观赏',
    'footer.tagline': '与自然共生的农园体验',
    'footer.visit': '交通信息',
    'footer.address': '越南林同省大叻市',
    'footer.hours': '营业时间：每日7:00–18:00',
    'footer.links': '链接',
    'footer.newsletter': '订阅通知',
    'footer.newsletter.desc': '获取最新资讯',
    'footer.email.ph': '电子邮箱',
    'footer.subscribe': '订阅',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': '※ 儿童须由成人陪同参加。如有食物过敏，请提前告知工作人员。',
    'services.hero.desc': '我们提供10种体验：摘水果、烧烤、儿童游乐区、灯笼散步等，精彩等您来体验。',
    'gallery.hero.desc': '通过图集领略绿之农园的四季风光与难忘体验瞬间。',
    'gallery.cat.farm': '农园风景 / FARM', 'gallery.cat.farm.title': '农园的四季',
    'gallery.cat.picking': '水果采摘 / PICKING', 'gallery.cat.picking.title': '水果采摘体验',
    'gallery.cat.family': '家庭体验 / FAMILY', 'gallery.cat.family.title': '家庭和孩子们的笑脸',
    'gallery.cat.couple': '情侣 / COUPLES', 'gallery.cat.couple.title': '灯笼之夜与情侣体验',
    'about.f1t': '100%有机', 'about.f1d': '不使用农药和化学肥料，安全健康，让孩子们也能放心品尝。',
    'about.f2t': '日式空间', 'about.f2d': '融入日本庭院美学，营造宁静舒适的游览环境。',
    'about.f3t': '随摘随吃', 'about.f3d': '在游览期间，您可以尽情享用亲手采摘的新鲜水果。',
  },

  ko: {
    'nav.about': '농원 소개', 'nav.services': '체험 서비스',
    'nav.experience': '체험 안내', 'nav.gallery': '갤러리',
    'nav.pricing': '요금', 'nav.book': '예약하기',

    'hero.slide1.sub': '달랏의 자연 속에서',
    'hero.slide1.tagline': '과일과 함께하는\n특별한 순간',
    'hero.slide2.sub': '6월~8월 한정',
    'hero.slide2.tagline': '블루베리 수확\n가족 주말',
    'hero.slide3.sub': '주말 · 커플 한정',
    'hero.slide3.tagline': '등불의 밤\n두 사람의 이야기',
    'hero.cta.services': '체험 보기 →',
    'hero.cta.book': '예약하기 →',

    'concept.jp': '自然とともに、心が潤う農園体験。',
    'concept.en': '자연이 영혼을 풍요롭게 하는 농원 체험.',

    'about.label': '농원 소개 / ABOUT',
    'about.title': '미도리 팜 소개',
    'about.lead': '달랏의 맑은 공기와 풍부한 토양에서 자란 과일들.',
    'about.body': '일본식 농업 체험을 베트남 달랏에서 제공합니다. 블루베리, 포도 수확, 온 가족이 즐길 수 있는 다양한 액티비티를 통해 잊을 수 없는 추억을 만들어 드립니다.',
    'about.cta': '서비스 보기 →',

    'services.label': '체험 서비스 / SERVICES',
    'services.title': '농원 체험 메뉴',

    'svc.blueberry.season': '6월~8월',
    'svc.blueberry.jp': '블루베리 수확',
    'svc.blueberry.desc': '신선한 블루베리를 직접 손으로 풍성하게 수확하세요. 아이들이 가장 좋아하는 정番 체험!',
    'svc.grape.season': '7월~9월',
    'svc.grape.jp': '포도 수확',
    'svc.grape.desc': '탐스럽게 익은 포도를 수확하고 농원 테라스에서 맛보세요.',
    'svc.fishing.season': '연중',
    'svc.fishing.jp': '낚시 & BBQ',
    'svc.fishing.desc': '잡은 물고기를 바로 숯불에 구워 드세요. 자연 속에서 보내는 최고의 시간입니다.',
    'svc.kids.season': '연중 · 무료',
    'svc.kids.jp': '키즈 스페이스',
    'svc.kids.desc': '어린 아이들이 안심하고 놀 수 있는 전용 공간. 부모님도 여유롭게 쉬실 수 있습니다.',
    'svc.lantern.season': '주말 · 저녁~',
    'svc.lantern.jp': '등불 황혼 산책',
    'svc.lantern.desc': '부드러운 등불 빛에 감싸인 농원을 두 사람이 천천히 걷는 저녁 체험. 커플에게 인기 있는 특별 프로그램입니다.',
    'svc.more': '자세히 보기 →',

    'audience.family.label': '가족 대상 / FOR FAMILIES',
    'audience.family.title': '아이들의 미소가\n빛나는 주말',
    'audience.family.desc': '아이들이 신나게 놀고 온 가족이 자연의 혜택을 즐기는 특별한 휴일.',
    'audience.family.cta': '예약하기 →',
    'audience.couple.label': '커플 대상 / FOR COUPLES',
    'audience.couple.title': '등불의 밤\n두 사람만의 시간',
    'audience.couple.desc': '부드러운 등불 빛 속에서 소중한 사람과 보내는 잊을 수 없는 순간.',
    'audience.couple.cta': '자세히 보기 →',

    'exp.label': '체험 안내 / HOW IT WORKS',
    'exp.title': '체험 흐름',
    'exp.step1.title': '예약하기', 'exp.step1.desc': '폼 또는 LINE으로 날짜를 선택하여 예약해 주세요.',
    'exp.step2.title': '농원 도착', 'exp.step2.desc': '달랏 시내에서 차로 약 20분. 직원이 맞이해 드립니다.',
    'exp.step3.title': '체험 즐기기', 'exp.step3.desc': '좋아하는 체험을 자유롭게 조합하여 즐겨보세요.',
    'exp.step4.title': '기념품 가지고 귀가', 'exp.step4.desc': '수확한 과일은 그대로 가져가실 수 있습니다.',

    'gallery.label': '갤러리 / GALLERY',
    'gallery.title': '농원 풍경',

    'stats.visitors': '연간 방문객', 'stats.services': '체험 메뉴',
    'stats.languages': '지원 언어', 'stats.satisfaction': '만족도',

    'reviews.label': '고객 후기 / REVIEWS',
    'reviews.title': '방문객의 목소리',
    'review.1.text': '「아이들이 너무 좋아했어요. 블루베리 수확은 처음이라 정말 신선했습니다!」',
    'review.1.author': '— 다나카 가족',
    'review.2.text': '「등불 산책은 정말 로맨틱하고 멋졌습니다. 꼭 다시 오고 싶어요.」',
    'review.2.author': '— Nguyễn Lan (커플)',
    'review.3.text': '「잡은 물고기를 바로 구워 먹는 게 최고였어요. 직원들도 친절했습니다.」',
    'review.3.author': '— Chen Wei (가족)',

    'pricing.label': '요금 / PRICING',
    'pricing.title': '요금 플랜',
    'price.per': '1인당', 'price.popular': '인기 No.1', 'price.book': '예약하기',
    'price.basic.name': '베이직',
    'price.basic.f1': '과일 수확 체험 (1종)', 'price.basic.f2': '수확 과일 가져가기 (100g)', 'price.basic.f3': '키즈 스페이스 이용',
    'price.family.name': '패밀리', 'price.family.per': '4인까지',
    'price.family.f1': '과일 수확 체험 (2종)', 'price.family.f2': '낚시 & BBQ 세트',
    'price.family.f3': '수확 과일 가져가기 (500g)', 'price.family.f4': '키즈 스페이스 (무료)',
    'price.couple.name': '커플', 'price.couple.per': '2인',
    'price.couple.f1': '과일 수확 체험 (2종)', 'price.couple.f2': '등불 황혼 산책', 'price.couple.f3': '프리미엄 BBQ 세트',

    'booking.label': '예약 / RESERVATION',
    'booking.title': '예약하기',
    'booking.desc': '원하시는 날짜와 플랜을 선택하여 편하게 신청해 주세요. 확인 후 담당자가 연락드립니다.',
    'form.name': '이름', 'form.email': '이메일', 'form.phone': '전화번호',
    'form.plan': '플랜 선택',
    'form.guests1': '1명', 'form.guests2': '2명', 'form.guests3': '3명', 'form.guests4': '4명 이상',
    'form.message': '요청사항 · 메모',
    'form.submit': '예약 요청 보내기',
    'form.success': '감사합니다! 확인 연락을 드리겠습니다.',

    /* New services */
    'svc.sand.season': '연중', 'svc.sand.jp': '모래놀이 & 크레인 장난감',
    'svc.sand.desc': '굴착기와 크레인 장난감이 갖춰진 전용 모래놀이 공간. 아이들이 마음껏 파고 쌓을 수 있습니다.',
    'svc.food.jp': '푸드 코너 — 반미 & 스낵',
    'svc.food.desc': '바삭한 반미(베트남 바게트), 튀긴 스프링롤, 농원 과일을 곁들인 아이스크림을 즐겨보세요.',
    'svc.juice.jp': '신선 과일 주스',
    'svc.juice.desc': '농원에서 방금 수확한 포도와 블루베리로 즉석에서 짜낸 생주스. 순수하고 자연 그대로입니다.',
    'svc.maze.jp': '어린이 미로',
    'svc.maze.desc': '초록 자연 속에 숨어있는 아담한 미로. 아이들이 탐험하며 즐기는 인기 코너입니다.',
    'svc.photo.jp': '포토존',
    'svc.photo.desc': '농원 곳곳에 마련된 아름다운 포토존에서 소중한 순간을 사진으로 담아보세요.',
    'svc.food.season': '연중',
    'svc.chill.season': '주말 · 저녁', 'svc.chill.jp': '달빛 감상 & 힐링',
    'svc.chill.desc': '별빛과 달빛 아래, 고요한 농원에서 여유로운 시간을 보내세요. 마음이 편안해지는 특별한 순간입니다.',
    'svc.kids.free': '5세 이하 어린이는 완전 무료입니다.',
    /* Experience flows */
    'exp.tab.family': '가족 & 친구', 'exp.tab.couple': '커플 (저녁)',
    'exp.family.title': '가족 & 친구 당일 체험',
    'exp.family.sub': '어른과 아이 모두 신나게 즐기는 하루',
    'exp.couple.title': '로맨틱 커플 저녁 체험',
    'exp.couple.sub': '두 사람만을 위한 특별한 저녁 시간',
    'exp.family.s1.title': '포토존 촬영', 'exp.family.s1.desc': '농원 곳곳의 아름다운 포토존에서 첫 번째 기념사진을 찍어보세요.',
    'exp.family.s2.title': '포도 & 블루베리 수확', 'exp.family.s2.desc': '제철 과일을 직접 손으로 수확하는 모두가 좋아하는 체험!',
    'exp.family.s3.title': '어린이 놀이 시간', 'exp.family.s3.desc': '모래 굴착기, 미로, 놀이 공간에서 아이들이 신나게 놀 수 있습니다.',
    'exp.family.s4.title': '연못에서 낚시', 'exp.family.s4.desc': '농원 연못에서 함께 낚시를 즐겨보세요. 잡은 물고기는 바로 요리됩니다.',
    'exp.family.s5.title': '농원 식사 타임', 'exp.family.s5.desc': 'BBQ 생선, 반미, 신선 과일 주스, 과일 아이스크림으로 풍성한 식사.',
    'exp.family.s6.title': '과일 선물 구매', 'exp.family.s6.desc': '직접 수확한 포도와 블루베리를 구입해 소중한 사람에게 선물하세요.',
    'exp.couple.s1.title': '등불 정원 산책', 'exp.couple.s1.desc': '황혼이 내리면 등불로 빛나는 농원을 두 사람이 함께 천천히 걸어보세요.',
    'exp.couple.s2.title': '로맨틱 사진 촬영', 'exp.couple.s2.desc': '커플을 위해 특별히 꾸며진 포토존에서 아름다운 순간을 남기세요.',
    'exp.couple.s3.title': '함께 낚시', 'exp.couple.s3.desc': '저녁의 고요함 속에서 나란히 앉아 낚시를 즐기는 평화로운 시간.',
    'exp.couple.s4.title': 'BBQ 그릴', 'exp.couple.s4.desc': '잡은 물고기를 함께 숯불에 구우며 향긋한 저녁 식사를 준비하세요.',
    'exp.couple.s5.title': '반미 디너', 'exp.couple.s5.desc': '바삭한 반미와 신선한 농원 재료로 별빛 아래 특별한 저녁을 즐기세요.',
    'exp.couple.s6.title': '젠가 게임', 'exp.couple.s6.desc': '밤하늘 아래 웃음 가득한 젠가 게임으로 소중한 추억을 만드세요.',
    'exp.couple.s7.title': '달빛 감상', 'exp.couple.s7.desc': '고요한 농원에서 달과 별을 바라보며 완벽한 저녁을 마무리하세요.',
    'exp.family.s5b.title': '반미, 음료 & 아이스크림 즐기기',
    'exp.family.s5b.desc': '바삭한 반미, 농원 신선 과일주스, 과일 가득한 아이스크림으로 여유로운 오후를 보내세요.',
    'exp.tag.all': '모두에게 추천', 'exp.tag.seasonal': '시즌 한정',
    'exp.tag.kids': '아이들이 좋아해요', 'exp.tag.food': '농원 음식',
    'exp.tag.souvenir': '기념품으로', 'exp.tag.romantic': '로맨틱', 'exp.tag.together': '둘이서',
    /* Services — lead & feature bullets */
    'svc.blueberry.lead': '통통하게 익은 블루베리를 직접 손으로 따서 그 달콤새콤한 맛을 바로 느껴보세요.',
    'svc.blueberry.f1': '따서 바로 그 자리에서 시식 가능', 'svc.blueberry.f2': '수확한 블루베리 가져가기 가능',
    'svc.grape.lead': '묵직하게 익은 포도송이를 손으로 수확하고 농원 테라스에서 가족과 함께 맛보는 특별한 경험.',
    'svc.grape.f1': '완숙 포도 직접 손 수확', 'svc.grape.f2': '테라스 시식 타임 & 포토존 포함',
    'svc.fishing.lead': '고요한 연못에서 낚시를 즐기고 잡은 물고기를 숯불에 구워 먹는 농원에서만 가능한 특별한 미식 경험.',
    'svc.fishing.f1': '낚시 장비 전부 포함, 직접 준비 필요 없음', 'svc.fishing.f2': '잡은 물고기를 바로 숯불 BBQ로 조리',
    'svc.sand.lead': '대형 굴착기와 크레인 장난감이 가득한 꿈의 모래놀이터 — 아이들이 절대 떠나기 싫어하는 공간.',
    'svc.sand.f1': '대형 굴착기 & 크레인 장난감으로 마음껏 놀기', 'svc.sand.f2': '안전 울타리 설치 · 부모님 안심',
    'svc.maze.lead': '초록 자연 속에 숨어있는 아담한 미로 — 가족이 함께 출구를 찾아가는 즐거운 탐험 체험.',
    'svc.maze.f1': '온 가족이 힘을 합쳐 출구 찾기', 'svc.maze.f2': '나무 그늘이 있어 시원하고 쾌적',
    'svc.photo.lead': '자연광과 농원의 푸른 풍경이 최고의 필터. 정성스럽게 마련한 포토존에서 소중한 사진을 남겨보세요.',
    'svc.photo.f1': '농원 곳곳에 여러 개의 포토존 설치', 'svc.photo.f2': '커플, 가족, 어린이 사진 모두 어울리는 공간',
    'svc.food.lead': '바삭한 반미, 튀긴 스프링롤, 과일 아이스크림 — 농원에서만 즐길 수 있는 특별한 스낵 코너.',
    'svc.food.f1': '정통 베트남 반미 — 갓 구운 바삭함 · 튀긴 스프링롤', 'svc.food.f2': '농원 과일 아이스크림',
    'svc.juice.lead': '당일 수확한 포도와 블루베리를 바로 즉석에서 착즙. 무첨가, 무설탕의 가장 신선한 주스.',
    'svc.juice.f1': '100% 천연 · 설탕 무첨가, 방부제 없음', 'svc.juice.f2': '당일 수확 과일로 만든 생주스',
    'svc.kids.lead': '아이들이 마음껏 뛰어놀 수 있는 안전한 놀이 공간. 5세 이하 어린이는 완전 무료입니다.',
    'svc.kids.f1': '놀이기구, 모래놀이터 & 미니 슬라이드 완비', 'svc.kids.f2': '5세 이하 무료 · 보호자 동반 필수',
    'svc.lantern.lead': '해가 지면 수백 개의 등불이 농원을 환하게 밝힙니다. 두 사람만을 위한 환상적인 낭만적인 밤.',
    'svc.lantern.f1': '주말 한정 · 일몰 후 시작되는 나이트 프로그램', 'svc.lantern.f2': '커플 전용 포토존 & 별빛 감상 포함',
    'footer.tagline': '자연과 함께하는 농원 체험',
    'footer.visit': '오시는 방법',
    'footer.address': '베트남 람동성 달랏시',
    'footer.hours': '영업시간: 매일 7:00~18:00',
    'footer.links': '링크',
    'footer.newsletter': '뉴스레터',
    'footer.newsletter.desc': '최신 정보를 보내드립니다',
    'footer.email.ph': '이메일 주소',
    'footer.subscribe': '구독',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': '※ 어린이는 반드시 보호자와 함께 참여하세요. 식품 알레르기가 있으신 분은 사전에 직원에게 알려주시기 바랍니다.',
    'services.hero.desc': '과일 수확, BBQ, 어린이 놀이 공간, 등불 산책 등 10가지 체험을 제공합니다.',
    'gallery.hero.desc': '미도리 팜의 사계절과 체험 순간들을 갤러리에서 만나보세요.',
    'gallery.cat.farm': '농원 풍경 / FARM', 'gallery.cat.farm.title': '농원의 사계절',
    'gallery.cat.picking': '과일 수확 / PICKING', 'gallery.cat.picking.title': '과일 수확 체험',
    'gallery.cat.family': '가족 체험 / FAMILY', 'gallery.cat.family.title': '가족과 아이들의 미소',
    'gallery.cat.couple': '커플 / COUPLES', 'gallery.cat.couple.title': '등불의 밤과 커플 체험',
    'about.f1t': '100% 유기농', 'about.f1d': '농약·화학비료 미사용. 아이들에게도 안심하고 드실 수 있습니다.',
    'about.f2t': '일본식 공간', 'about.f2d': '일본 정원의 미학을 담은 평화롭고 여유로운 환경입니다.',
    'about.f3t': '따서 바로 맛보기', 'about.f3d': '방문 중 직접 수확한 과일을 마음껏 드실 수 있습니다.',
  },
};

/* ══════════════════════════════════════════════════════
   i18n Engine
══════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('midori-lang') || 'ja';

function applyLang(lang) {
  const tr = T[lang];
  if (!tr) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('midori-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = tr[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = tr[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll('.ls-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

document.querySelectorAll('.ls-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ══════════════════════════════════════════════════════
   Nav — scroll + mobile drawer
══════════════════════════════════════════════════════ */
const nav    = document.getElementById('mainNav');
const burger = document.getElementById('navBurger');
const drawer = document.getElementById('mobileDrawer');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  updateFab();
}, { passive: true });

burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    drawer.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* Smooth anchor scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  });
});

/* ══════════════════════════════════════════════════════
   Hero Slider
══════════════════════════════════════════════════════ */
(function initSlider() {
  if (!document.getElementById('sliderPrev')) return;
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  let current  = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('sliderPrev').addEventListener('click', () => { goTo(current - 1); startAuto(); });
  document.getElementById('sliderNext').addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.idx); startAuto(); }));

  startAuto();
})();

/* ══════════════════════════════════════════════════════
   Scroll Animations
══════════════════════════════════════════════════════ */
const animObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('anim-in'); animObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-anim], [data-anim-stagger]').forEach(el => animObs.observe(el));

/* ══════════════════════════════════════════════════════
   Animated Counters
══════════════════════════════════════════════════════ */
function animCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1600;
  const start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); cntObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => cntObs.observe(el));

/* ══════════════════════════════════════════════════════
   Mobile FAB
══════════════════════════════════════════════════════ */
const fab    = document.getElementById('mFab');
const hero   = document.getElementById('hero');
const footer = document.querySelector('.footer');

function updateFab() {
  if (!fab || window.innerWidth >= 1024) return;
  const inHero     = hero.getBoundingClientRect().bottom > 0;
  const nearFooter = footer.getBoundingClientRect().top < window.innerHeight + 80;
  fab.classList.toggle('show', !inHero && !nearFooter);
}
window.addEventListener('scroll', updateFab, { passive: true });

/* ══════════════════════════════════════════════════════
   Booking Form
══════════════════════════════════════════════════════ */
const bkForm    = document.getElementById('bookingForm');
const bkSuccess = document.getElementById('formSuccess');
if (bkForm) {
  const dateInput = bkForm.querySelector('input[type="date"]');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  bkForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = bkForm.querySelector('[type="submit"]');
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1000));
    bkForm.style.display = 'none';
    bkSuccess.classList.add('show');
    btn.disabled = false;
  });
}

/* ══════════════════════════════════════════════════════
   Newsletter Form
══════════════════════════════════════════════════════ */
const nlForm = document.getElementById('nlForm');
if (nlForm) {
  nlForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = nlForm.querySelector('button');
    btn.textContent = '✓';
    btn.style.background = 'var(--moegi)';
    nlForm.querySelector('input').value = '';
    setTimeout(() => {
      btn.textContent = T[currentLang]['footer.subscribe'] || '登録';
      btn.style.background = '';
    }, 3000);
  });
}

/* ══════════════════════════════════════════════════════
   Experience Tabs (experience.html)
══════════════════════════════════════════════════════ */
document.querySelectorAll('.exp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.querySelector(`.exp-panel[data-panel="${target}"]`);
    if (panel) panel.classList.add('active');
  });
});

/* Mark active nav link based on current page */
(function markActivePage() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active-page');
  });
})();

/* ══════════════════════════════════════════════════════
   Init
══════════════════════════════════════════════════════ */
applyLang(currentLang);
