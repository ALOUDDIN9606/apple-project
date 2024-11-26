import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Header_Title from "./components/header_title/Header_Title";

const heroData = [
  {
    title: "iPhone 16 Pro",
    desc: "Hello, Apple Intelligence",
    cl: "#fff",
    url: "https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg",
    buttons: ["Learn more", "Buy"],
    btn_bg: "blue",
  },
  
  {
    title: "iPhone 16",
    desc: "Hello, Apple Intelligence",
    cl: "#fff",
    url: "https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg",
    buttons: ["Learn more", "Buy"],
    btn_bg: "white",
  },

  {
    title: (
      <img
        src="https://www.apple.com/v/home/bv/images/logos/ipad-air/hero_logo_ipad_air__ejixj9pic0uq_medium_2x.png"
        alt="iPad Air Logo"
      />
    ),
    desc: "Two sizes. Faster chip. Does it all.",
    cl: "#000",
    url: "https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_largetall.jpg",
    buttons: ["Learn more", "Buy"],
    btn_bg: "blue",
  },
];

function App() {
  return (
    <>
      <Header />
      <Header_Title />
      {heroData.map((hero, index) => (
        <Hero
          key={index}
          title={hero.title}
          desc={hero.desc}
          cl={hero.cl}
          url={hero.url}
          buttons={hero.buttons}
          btn_bg={hero.btn_bg}
        />
      ))}
      <Main />
    </>
  );
}

export default App;
