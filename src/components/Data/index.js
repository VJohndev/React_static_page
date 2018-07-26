const products = [
  {
    id: 1,
    name: "BMW 1",
    description: "Best to race in road",
    price: 16.99,
    type: "Fish",
    img: "https://i.ytimg.com/vi/siugtB2V5KQ/maxresdefault.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 2,
    name: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 4.99,
    type: "Fish",
    img: "http://1.bp.blogspot.com/-olracquAc3U/TuHte9_8TbI/AAAAAAAAIBM/fhChkOwYKXE/s1600/Bmw+-+www.HotWallpaper9.Blogspot.com+%252811%2529.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 3,
    name: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 14.99,
    type: "Fish",
    img: "https://www.drivespark.com/wallimg/360x80/photos/2015-bmw-m4-dtm/bmw_m4-dtm_racing-2015-01.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 4,
    name: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 20.00,
    type: "Fish",
    img: "http://www.bmiregionalinflightmagazine.com/wp-content/uploads/2018/07/wallpaper-new-bmw-car-hd-photos-reviews-on-image-high-resolution-of-mobile-phones-cars-picsputer.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 5,
    name: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 4.99,
    type: "Fish",
    img: "https://images.designtrends.com/wp-content/uploads/2015/11/06085041/HD-BMW-Car-Background.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 6,
    name: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 19.99,
    type: "Fish",
    img: "https://stmed.net/sites/default/files/bmw-vision-wallpapers-31908-9105664.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 7,
    name: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 6.00,
    type: "Fish",
    img: "https://images2.alphacoders.com/499/thumb-350-499641.jpg",
    inCart: false,
    category: "flowerHorn"
  },
  {
    id: 8,
    name: "White Shirt Women",
    description: "White Shirt for Women",
    price: 14.99,
    type: "Fish",
    img: "http://wallpaperim.net/_data/i/upload/2014/10/07/20141007401466-52caab05-th.jpg",
    inCart: false,
    category: "Other"
  },
  {
    id: 9,
    name: "Black Shirt Women",
    description: "Black Shirt for Women",
    price: 20.99,
    type: "Fish",
    img: "https://wallpaper-house.com/data/out/9/wallpaper2you_319555.jpg",
    inCart: false,
    category: "Other"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 4.99,
    type: "Fish",
    img: "http://4recentcars.com/wp-content/uploads/2018/02/rolls-royce-cars-wallpapers-awesome-backgrounds-rollsroyce-cars-image-with-rolls-royce-car-wallpaper-of-rolls-royce-cars-wallpapers.jpg",
    inCart: false,
    category: "Other"
  },
  {
    id: 11,
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 45.99,
    type: "Accessory",
    img: "http://www.snapemotorcompany.co.uk/wp-content/uploads/2014/07/tyres.jpg",
    inCart: false,
    category: "Food"
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 14.99,
    type: "Accessory",
    img: "https://www.itptires.com/Portals/2/SmithCart/Images/Holeshot-HD.png",
    inCart: false,
    category: "Food"
  },
  {
    id: 13,
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 10.99,
    type: "Accessory",
    img: "https://wallpapercave.com/wp/TdX5tck.jpg",
    inCart: false,
    category: "Food"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 14.99,
    type: "Accessory",
    img: "https://image.shutterstock.com/image-vector/initial-logo-letter-kd-shield-260nw-721268236.jpg",
    inCart: false,
    category: "Food"
  },
  {
    id: 15,
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 20.99,
    type: "Accessory",
    img: "https://www.logodesignlove.com/images/photos/skoda-badge.jpg",
    inCart: false,
    category: "Food"
  },
  {
    id: 16,
    name: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 13.99,
    type: "Accessory",
    img: "http://www.designbolts.com/wp-content/uploads/2013/06/Fiat-Abarth-Logo-Wallpaper-HD1.jpg",
    inCart: false,
    category: "Food"
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 13.99,
    type: "Fish",
    img: "http://tremendouswallpapers.com/wp-content/uploads/2014/12/2013_vorsteiner_bentley_continental_gt_br10_rs_2-1920x1200.jpg",
    inCart: false,
    category: "Other"
  },
  {
    id: 18,
    name: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 9.99,
    type: "Fish",
    img: "https://4.bp.blogspot.com/-66Pw0mazIHM/V61irqIPfpI/AAAAAAAAAcw/vMRb4zo3gU8X9G6SO_er-WmvaOMmLwIcgCLcB/s1600/Bentley-4.jpg",
    inCart: false,
    category: "Other"
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 35.99,
    type: "Fish",
    img: "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/mercedes-wallpapers-14.jpg",
    inCart: false,
    category: "Other"
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 15.99,
    type: "Fish",
    img: "http://newwallpapershd.com/wp-content/uploads/2016/04/maserati_granturismo_sport_2014-wide.jpg",
    inCart: false,
    category: "Other"
  },
];

export default products;
