import foodDelivery from "../../assets/food-delivery.png";
import dineOutImg from "../../assets/dineout.png";

let resObject = {
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
      {
        id: 5,
        restName: "Berohz Biryani",
        location: "Shivaji Nagar, pune",
        rating: "5",
        cusins: ["Biryani","North Indian"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/tmeS86Hj_RaW189maiI_ubYP-1J-2FNLwR0WneywxLM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/dWN0LWFzc2V0cy5m/YWFzb3MuaW8vZWF0/c3VyZS9wcm9kdWN0/aW9uL2xhemVlei1i/aHVuYS1tdXJnaC1i/aXJ5YW5pLmpwZWc",
      },
      {
        id: 6,
        restName: "Barbeq Nation",
        location: "Shivaji Nagar, pune",
        rating: "5",
        cusins: ["Biryani","North Indian"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/IEZT0le2tCp5aatd9de9YzlGiXTyFnjtMcTI_gXjIDc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuamRtYWdpY2Jv/eC5jb20vY29tcC9k/ZWZfY29udGVudF9j/YXRlZ29yeS9iYXJi/ZXF1ZS1uYXRpb24t/cmVzdGF1cmFudHMt/MTE5NjYzMjItbzBk/MDZlaDB1OC0yNTAu/anBn",
      },
      {
        id: 7,
        restName: "Poptates",
        location: "Shivaji Nagar, pune",
        rating: "3",
        cusins: ["Biryani","North Indian"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/8InDimlz_c8l9Xf5i1Pk0A6oZacC1LJ5Uzn9UsKD9cs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbTEu/ZGluZW91dC5jby5p/bi9pbWFnZXMvdXBs/b2Fkcy9yZXN0YXVy/YW50L3NoYXJwZW4v/NC9lL2svcDQ3OTUt/MTU0Mjg4MTYwNjVi/ZjY4MTQ2NzI4MDMu/anBnP3RyPXRyOm4t/bGFyZ2U",
      },
      {
        id: 8,
        restName: "Irani Cafe",
        location: "Shivaji Nagar, pune",
        rating: "3",
        cusins: ["Biryani","North Indian"],
        deliveryTime: "20",
        image:
          "https://imgs.search.brave.com/HdgEcT7LqQ-QKJGzs4iWPHcJwLvHIsUT8pIv-BibZv8/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5o/ZXJpdGFnZWluc3Rp/dHV0ZS5jb20vem9y/b2FzdHJpYW5pc20v/aW1hZ2VzL2lyYW5p/Y2FmZS9sZW9wb2xk/b3V0c2lkZTIwMDgu/anBn",
      },
    ],
  },
};

export default resObject;
