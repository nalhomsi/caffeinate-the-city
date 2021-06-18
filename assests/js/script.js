var coffeeShops = [
  {
    Name: "Epoch @ North Loop",
    Address: "221 W N Loop Blvd, Austin, TX 78751",
    Website: "http://www.epochcoffee.com/"
  },
  {
    Name: "Epoch @ the Village",
    Address: "2700 W Anderson Ln #409, Austin, TX 78757",
    Website: "http://epochcoffee.com/"
  },
  {
    Name: "Epoch @ Far West",
    Address: "3900 Far West Blvd, Austin, TX 78731",
    Website: "http://epochcoffee.com/"
  },
  {
    Name: "Pacha Organic Cafe",
    Address: "4618 Burnet Rd, Austin, TX 78756",
    Website: "http://pachacafe.com/"
  },
  {
    Name: "Summer Moon Coffee",
    Address: "2301 W Anderson Ln #100, Austin, TX 78757",
    Website: "https://summermooncoffee.com/pages/anderson-lane-north-austin"
  },
  {
    Name: "Lazydaze +Coffeeshop",
    Address: "1738 W Anderson Ln, Austin, TX 78757",
    Website: "https://www.lazydazeshop.com/"
  },
  {
    Name: "Mozart's Coffee Roasters",
    Address: "3825 Lake Austin Blvd, Austin, TX 78703",
    Website: "http://mozartscoffee.com/"
  },
  {
    Name: "Cuvee Coffee Bar",
    Address: "2000 E 6th St, Austin, TX 78702",
    Website: "http://cuveecoffee.com/"
  },
  {
    Name: "Revival Coffee",
    Address: "1405 E 7th St, Austin, TX 78702",
    Website: "http://revivaltexas.com/"
  },
  {
    Name: "Cherrywood Coffeehouse",
    Address: "1400 E 38th 1/2 St, Austin, TX 78722",
    Website: "http://www.cherrywoodcoffeehouse.com/"
  },
  {
    Name: "85°C Bakery Cafe - Austin Airport",
    Address: "6929 Airport Blvd #197, Austin, TX 78752",
    Website: "http://85cbakerycafe.com/"
  },
  {
    Name: "Wright Bros. Brew and Brew",
    Address: "500 San Marcos St #105, Austin, TX 78702",
    Website: "http://www.thebrewandbrew.com/"
  },
  {
    Name: "Merit Coffee",
    Address: "222 West Ave #120, Austin, TX 78701",
    Website: "http://www.meritcoffee.com/"
  },
  {
    Name: "Houndstooth Coffee",
    Address: "11501 Rock Rose Ave Ste 118, Austin, TX 78758",
    Website: "http://houndstoothcoffee.com/"
  },
  {
    Name: "Medici Roasting",
    Address: "1101 W Lynn St, Austin, TX 78703",
    Website: "https://mediciroasting.com/pages/west-lynn"
  },
  {
    Name: "Coffee + Crisp",
    Address: "3220 Amy Donovan Plaza #100, Austin, TX 78758",
    Website: "http://www.coffeeandcrisp.com/"
  },
  {
    Name: "Barrett's Coffee",
    Address: "713 W St Johns Ave, Austin, TX 78752",
    Website: "http://barrettscoffee.com/"
  },
  {
    Name: "Monkey Nest Coffee",
    Address: "5353 Burnet Rd, Austin, TX 78756",
    Website: "https://monkeynestcoffee.com/"
  },
  {
    Name: "Fat Cats Organic Coffee & Desserts",
    Address: "7020 Easy Wind Dr Suite 140, Austin, TX 78752",
    Website: "http://www.fatcatsaustin.com/"
  },
  {
    Name: "Cafe Java",
    Address: "11900 Metric Blvd Suite K, Austin, TX 78758",
    Website: "https://www.facebook.com/Cafe-Java-Austin-350473130184/"
  },
  {
    Name: "Halcyon",
    Address: "218 W 4th St, Austin, TX 78701",
    Website: "http://www.halcyoncoffeebar.com/"
  },
  {
    Name: "WFM Coffee Bar",
    Address: "525 N Lamar Blvd, Austin, TX 78703",
    Website: "http://www.wholefoodsmarket.com/stores/lamar"
  },
  {
    Name: "Bandit Coffee, Matcha, & Ice Cream",
    Address: "706 N Lamar Blvd, Austin, TX 78703",
    Website: "http://thebandit.com/"
  },
  {
    Name: "Turnstile Coffee Beer and Spirits",
    Address: "10025 Burnet Rd, Austin, TX 78758",
    Website: "http://www.turnstilebrews.com/"
  },
  {
    Name: "Cosmic Coffee + Beer Garden",
    Address: "121 Pickle Rd, Austin, TX 78704",
    Website: "https://www.cosmiccoffeebeer.com/"
  },
  {
    Name: "Sorrento's Coffee Drive-Thru",
    Address: "3021 W Anderson Ln, Austin, TX 78757",
    Website: "http://sorrentoscoffeedrivethru.com/"
  },
  {
    Name: "Lucky Lab Coffee Co.",
    Address: "2421 San Antonio St, Austin, TX 78705",
    Website: "http://www.luckylabcoffee.com/"
  },
  {
    Name: "Codependent Cocktails + Coffee",
    Address: "301 West Ave STE 110, Austin, TX 78701",
    Website: "https://www.codependentatx.com/"
  },
  {
    Name: "Idlewild Coffee",
    Address: "812 W 12th St, Austin, TX 78701",
    Website: "https://www.idlewildcoffee.com/"
  },
  {
    Name: "Flightpath Coffeehouse",
    Address: "5011 Duval St, Austin, TX 78751",
    Website: "http://flightpathcoffeehouse.com/"
  }
]

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
