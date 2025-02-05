import foodDelivery from "../../assets/food-delivery.png";
import dineOutImg from "../../assets/dineout.png";

const resObject = {
  data: {
    orderType: [
      {
        id: 1,
        type: "FOOD DELIVERY",
        from: "RESTAURENTS",
        discount: "60",
        img: { foodDelivery },
      },
      {
        id: 2,
        type: "DINEOUT",
        from: "EAT OUT & SAVE MORE",
        discount: "50",
        img: { dineOutImg },
      },
    ],
    cards: [
      {
        id: 1,
        restName: "Veradi Sauji",
        location: "Wakad, pune",
        rating: "5",
        cusins: ["Chinese", "Indian", "Italian"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/BMX5MmFSQL__Pf-FMWS7WtruPJiDoa2G5OFX153mCSc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/Y2VlMmZiZTM0NTE3/NWVhMTA0MTEwNS85/MzgzNzMxYy1kYmNj/LTQ1NjAtYTgxMy04/MjQ0MmZkYTUwZDgv/Q2hhbXBpb25DdXJy/eS00Mi5qcGc",
      },
      {
        id: 2,
        restName: "KFC",
        location: "Baner, pune",
        rating: "4",
        cusins: ["Fast Food"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/OCRGH3gMqE5ZFRzGZ3hTXtEV_ycWtj1C7Ho8Ks12OJ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QxL0tGQ19QcmV0/b3JpYS5qcGc",
      },
      {
        id: 3,
        restName: "Burger King",
        location: "Hinjewadi, pune",
        rating: "3",
        cusins: ["Fast Food"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/tyWMhnXjTa-3jzGdZew4r2TxYWW-lA-HEB_ha66qmbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90b2Rv/c29zc2FudG9zLm55/Yy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMi9CdXJnZXIt/S2luZy1EaW5uZXIt/TWVudS03Njh4NDM5/LmpwZw",
      },
      {
        id: 4,
        restName: "Starbucks",
        location: "Shivaji Nagar, pune",
        rating: "5",
        cusins: ["Breverages"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/jV1ejQca8sxW55nHQClL279d3Jdt4wvLCE9D8YAib78/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmtp/bmphLWltZy5jb20v/aW1hZ2UvdXBsb2Fk/L2NfZml0LHFfNjAs/d182NDUvZWVhMjI3/YmFjNjQ2ZTNiNmY5/OTRlMmM4MTcwNWQz/ODEuanBn",
      },
    ],
  },
};

export default resObject;
