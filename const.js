const constants = {
  randomPhilosophy: [
    "Đôi khi, giá trị của một tờ 10.000 đồng không chỉ đo lường bằng số tiền mà nó mang lại, mà nó còn thể hiện sự quan tâm, tình cảm và sự trân trọng đối với người nhận. Đừng bao giờ coi thường giá trị của một món quà, dù nó có nhỏ nhất, vì đó có thể là điều tạo nên sự khác biệt và ý nghĩa trong cuộc sống.",
    "Một tờ 10.000 đồng có thể mang lại nhiều hơn chỉ là giá trị tiền tệ. Nó có thể đại diện cho tình yêu, sự quan tâm và tình cảm mà ta muốn gửi gắm đến người nhận.",

    "Mỗi tờ 10.000 đồng là một sản phẩm của công sức, nỗ lực và thời gian của chúng ta. Hãy tôn trọng giá trị của nó và sử dụng nó một cách có ý nghĩa.",

    "Những gì ta trao tặng không phải là số tiền mà ta chi ra, mà là tình cảm và sự trân trọng. Một tờ 10.000 đồng có thể là một món quà giản dị, nhưng lại có giá trị tinh thần to lớn.",

    "Đôi khi, việc giúp đỡ người khác không nhất thiết phải là việc chi tiền bạc. Một tờ 10.000 đồng có thể đem lại niềm vui và sự cảm thông cho người cần sự giúp đỡ.",

    "Đối với một số người, một tờ 10.000 đồng có thể không có ý nghĩa nhiều. Nhưng đối với những người khác, nó có thể có giá trị tuyệt đối. Hãy luôn tôn trọng và đánh giá cao những giá trị khác nhau của mỗi người.",

    "Tổng số tiền chúng ta có có thể thay đổi, nhưng những giá trị về tình cảm, sự quan tâm và tình người là vô giá. Hãy sử dụng mỗi tờ 10.000 đồng một cách có ý nghĩa và hãy trân trọng những giá trị vô giá của cuộc sống.",

    "Mỗi tờ 10.000 đồng có thể đóng góp vào những mục đích khác nhau trong cuộc sống của chúng ta. Tuy nhiên, giá trị thực sự của nó phụ thuộc vào cách chúng ta sử dụng và đánh giá nó.",

    "Một tờ 10.000 đồng có thể không có giá trị lớn đối với một người giàu có, nhưng nó lại có ý nghĩa rất quan trọng đối với những người cần sự giúp đỡ. Đừng coi thường giá trị của một món quà, dù nó có nhỏ nhất.",

    "Mỗi tờ 10.000 đồng là một tài sản quý giá, nó mang trong mình những giá trị về sự đóng góp, sự hỗ trợ và lòng nhân ái. Hãy sử dụng nó một cách có ý nghĩa và tôn trọng giá trị của mỗi tờ tiền.",
    "Khi ta trao tặng một tờ 10.000 đồng, ta đang trao tặng một phần của chính mình. Hãy đối xử với mỗi tờ tiền như một món quà đặc biệt và đánh giá cao giá trị tinh thần mà nó mang lại.",

    "Giá trị của một tờ 10.000 đồng không phải chỉ nằm trong số tiền mà nó đại diện, mà còn nằm trong những kỷ niệm, cảm xúc và tình cảm mà nó tạo ra. Hãy trân trọng mỗi tờ tiền và giữ lại những kỷ niệm đẹp về nó.",

    "Mỗi tờ 10.000 đồng là một hình ảnh về công lao, nỗ lực và sự đóng góp của người lao động. Hãy đánh giá cao giá trị của mỗi tờ tiền và tôn trọng những người đã tạo ra chúng.",

    "Một tờ 10.000 đồng có thể không đáng kể với một người giàu có, nhưng đối với những người nghèo khó, nó có thể là nguồn động lực và niềm hy vọng. Hãy sử dụng mỗi tờ tiền một cách có ý nghĩa và giúp đỡ những người cần sự hỗ trợ.",

    "Mỗi tờ 10.000 đồng là một biểu tượng về giá trị và sự khác biệt. Hãy trân trọng giá trị của mỗi tờ tiền và đánh giá cao những giá trị độc đáo của mỗi người.",

    "Tờ 10.000 đồng không chỉ là số tiền, mà còn là sự hy vọng, nỗ lực và sự khát khao của mỗi người. Hãy tôn trọng giá trị của mỗi tờ tiền và đánh giá cao những giá trị tinh thần mà nó mang lại.",

    "Giá trị của một tờ 10.000 đồng không chỉ phụ thuộc vào số tiền mà nó đại diện, mà còn phụ thuộc vào tình cảm và sự đoàn kết giữa mọi người. Hãy sử dụng mỗi tờ tiền một cách có ý nghĩa và đóng góp vào sự phát triển xã hội.",

    "Mỗi tờ 10.000 đồng là một tấm vé vào cuộc sống, nó cho phép chúng ta có thể mua được những thứ cần thiết để sống. Hãy trân trọng mỗi tờ tiền và sử dụng nó một cách có hiệu quả và có ý nghĩa.",

    "Giá trị của một tờ 10.000 đồng không chỉ nằm trong số tiền mà nó đại diện, mà còn nằm trong những giá trị về sự chung thủy, sự trung thực và lòng tin. Hãy tôn trọng mỗi tờ tiền và giữ vững những giá trị này trong cuộc sống.",

    "Mỗi tờ 10.000 đồng là một món quà đặc biệt, nó cho phép chúng ta có thể giúp đỡ những người cần sự hỗ trợ. Hãy sử dụng mỗi tờ tiền một cách có ý nghĩa và đóng góp vào sự phát triển xã hội.",

    "Tờ 10.000 đồng có thể là số tiền nhỏ, nhưng nó lại mang trong mình giá trị to lớn. Hãy trân trọng mỗi tờ tiền và đánh giá cao những giá trị về tình cảm, lòng nhân ái và sự đoàn kết.",
  ],
  emoji: [
    "ami_heart",
    "heart",
    "green_heart",
    "ami_away",
    "fb_heart",
    "joy",
    "ami_cute",
    "heart_hostify",
    "heart_eyes_hostify",
    "ami_cry",
    "couple_with_heart_woman_man",
    "pixel_heart",
    "relaxed",
    "ami_bye",
    "laughing",
    "smile",
    "ami_appease",
    "ami_cry_out",
    "yellow_heart",
    "grin",
    "heavy_heart_exclamation",
    "two_heart",
    "ami_poor",
    "ami_weep",
    "ami_head_shake",
    "ami_oh",
    "illusion_heart",
    "ami_vomit",
    "ami_confusion",
    "heartbeat",
    "ami_hmm",
    "ami_drunk",
    "ami_dodge",
    "ami_good",
    "ami_angry",
    "ami_heart_shot",
    "ami_clap",
    "heartpulse",
    "kissing_heart",
    "ami_frown",
    "smiley",
    "ami_laugh",
    "ami_food_shake",
    "ami_obey",
    "ami_yummy",
    "ami_downfall",
    "ami_sleep",
    "ami_flirt",
    "ami_why",
    "ami_sad",
    "ami_rofl",
    "ami_belly_rub",
    "hearts",
    "ami_pinch",
    "ami_belly_shake",
    "ami_silent",
    "ami_fall",
    "gift_heart",
    "grinning",
    "ami_haha",
    "heart_pepe",
    "black_heart",
    "ami_afraid",
    "ami_scratch",
    "purple_heart",
    "ami_heart",
    "ami_heart_shot",
    "ami_in_love",
    "ami_ok",
    "ami_impotent",
    "ami_surprise",
    "ami_happy",
    "ami_handsome",
    "ami_ready",
    "rofl",
    "ami_skittish",
    "ami_fart",
    "ami_jump",
    "ami_shameless",
    "couple_with_heart_woman_woman",
    "blue_heart",
    "ami_think",
    "ami_work_fall",
    "ami_no",
    "sweat_smile",
    "ami_stalking",
    "couple_with_heart_man_man",
    "ami_trust",
    "ami_fight",
    "bonk_cat",
    "capoo-bugcat-angry",
    "capoo-bugcat-angry-2",
    "capoo-bugcat-crazied",
    "capoo-bugcat-dead",
    "capoo-bugcat-huh",
    "capoo-bugcat-rich",
    "capoo-bugcat-scared",
    "capoo-bugcat-work",
    "capoo-bugcat-worry",
    "cat_1",
    "cat_2",
    "cat_cute",
    "catcutedance",
    "cat_dance",
    "catdance",
    "catgato",
    "cathead",
    "cat-like",
    "cat_love",
    "cat-pout",
    "cat-see",
    "cat_shock",
    "cat_smile",
    "cat-wiggle",
    "dancingcat",
    "dau_cat_moi",
    "donghocat",
    "loadingcat",
    "pop_cat",
    "wowcat",
    "60fps_parrot",
    "async_parrot",
    "crypto_parrot",
    "dab_parrot",
    "dad_parrot",
    "exceptionally_fast_parrot",
    "fast_parrot",
    "hypno_parrot",
    "love_parrot",
    "mask_parrot",
    "merge_conflict_parrot",
    "merged_parrot",
    "parrot",
    "php_parrot",
    "portal_parrot",
    "quad_parrot",
    "rotate_parrot",
    "spin_parrot",
    "troll_parrot",
    "up_down_parrot",
  ],
  categories: [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success"],
  emojiUIT: [
    "green_heart",
    "fb_heart",
    "heart_hostify",
    "heart_eyes_hostify",
    "pixel_heart",
    "yellow_heart",
    "heavy_heart_exclamation",
    "two_heart",
    "illusion_heart",
    "alphabet-white-u",
    "alphabet-white-i",
    "alphabet-white-t",
    "heart",
    "other-t",
    "alphabet-white-e",
    "alphabet-white-a",
    "alphabet-white-m",
    "heartbeat",
    "heartpulse",
    "kissing_heart",
    "hearts",
    "gift_heart",
    "heart_pepe",
    "black_heart",
    "purple_heart",
    "blue_heart",
  ]
};

module.exports = constants;
