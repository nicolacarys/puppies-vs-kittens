import { Map, List } from "immutable";

export default Map({

  kittenVic: 0,
  puppyVic: 0,
  kitten: 0,
  puppy: 0,
  battled: false,
  winner: "",

  kittens: Map({
    players: List([
      {
        src: "http://dirtypawzpetgrooming.com/wp-content/uploads/2012/01/kitten-little.jpg", 
        name: "TweedleDee", 
        likes: "Cuddles and lap-naps", 
        ferocityRating: "1/10",
      },
      {
        src: "http://www.petmd.com/sites/default/files/what-to-feed-kitten.jpg", 
        name: "Boo", 
        likes:"Warm milk and fuzzy blankets", 
        ferocityRating:"3/10",
      },
      {
        src: "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg", 
        name: "Jack", 
        likes:"Staring into your soul while you eat", 
        ferocityRating:"6/10",
      },
      {
        src: "http://www.cwvet.co.uk/wp-content/uploads/2016/11/Kitten-sleeping.jpg", 
        name: "Daisy", 
        likes:"Eating spiders when noone's looking", 
        ferocityRating:"5/10",
      },
      {
        src: "https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg", 
        name: "Luna", 
        likes:"Playing with mice and scratching chair legs", 
        ferocityRating:"8/10",
      },
      {
        src: "https://s-media-cache-ak0.pinimg.com/736x/22/43/99/224399d670478ad2f7bd38f65029feba--teacup-kitten-teacup-persian-kittens.jpg", 
        name: "Poppy", 
        likes:"Attacking stray feet from under the sofa", 
        ferocityRating:"9/10",
      }
    ])
  }),

  puppies: Map({
    players: List([
      {
        src: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg", 
        name: "Bingowings", 
        likes: "Eat scratches and muddy puddles", 
        ferocityRating: "4/10",
      },
      {
        src: "https://s-media-cache-ak0.pinimg.com/736x/49/31/d2/4931d228854f9b9ef6158cde2515e752--mini-yorkie-adorable-puppies.jpg", 
        name: "Ricky", 
        likes: "Barking all day every day", 
        ferocityRating: "6/10",
      },
      {
        src: "http://www.piperstreetvet.com.au/wp-content/uploads/2015/11/puppy.jpg", 
        name: "Roxy", 
        likes: "Naps on the sofa and eating daisies", 
        ferocityRating: "2/10",
      },
      {
        src: "http://globalmediademo.com/puppies/wp-content/uploads/2017/07/lq5PKx.jpg", 
        name: "Marmadule", 
        likes: "Rolling down the stairs and chasing ducks", 
        ferocityRating: "4/10",
      },
      {
        src: "http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-13.jpg", 
        name: "Boris", 
        likes: "Destroying books and licking doors", 
        ferocityRating: "6/10",
      },
      {
        src: "http://dogtraining.com.au/wp-content/uploads/2016/11/tumblr_og5no8p2F21rbibvmo1_1280.jpg", 
        name: "Pinky", 
        likes: "Terrorising cats and catching round yellow birds", 
        ferocityRating: "7/10",
      }
    ])
  }),

});