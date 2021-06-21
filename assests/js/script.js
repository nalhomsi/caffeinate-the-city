// Object array containing coffee shop information
var coffeeShops = [
  {
    Name: "Epoch @ North Loop",
    Address: "221 W N Loop Blvd, Austin, TX 78751",
    Website: "http://www.epochcoffee.com/",
    coords: {lat: 30.318604, lon: -97.72454}
  },
  {
    Name: "Epoch @ the Village",
    Address: "2700 W Anderson Ln #409, Austin, TX 78757",
    Website: "http://epochcoffee.com/",
    coords: {lat: 30.359107, lon: -97.734541}
  },
  {
    Name: "Epoch @ Far West",
    Address: "3900 Far West Blvd, Austin, TX 78731",
    Website: "http://epochcoffee.com/",
    coords: {lat: 30.357313, lon: -97.760621}
  },
  {
    Name: "Pacha Organic Cafe",
    Address: "4618 Burnet Rd, Austin, TX 78756",
    Website: "http://pachacafe.com/",
    coords: {lat: 30.317362, lon: -97.74063}
  },
  {
    Name: "Summer Moon Coffee",
    Address: "2301 W Anderson Ln #100, Austin, TX 78757",
    Website: "https://summermooncoffee.com/pages/anderson-lane-north-austin",
    coords: {lat: 30.355512, lon: -97.73019}
  },
  {
    Name: "Lazydaze +Coffeeshop",
    Address: "1738 W Anderson Ln, Austin, TX 78757",
    Website: "https://www.lazydazeshop.com/",
    coords: {lat: 30.353472, lon: -97.724432}
  },
  {
    Name: "Mozart's Coffee Roasters",
    Address: "3825 Lake Austin Blvd, Austin, TX 78703",
    Website: "http://mozartscoffee.com/",
    coords: {lat: 30.29547, lon: -97.783951}
  },
  {
    Name: "Cuvee Coffee Bar",
    Address: "2000 E 6th St, Austin, TX 78702",
    Website: "http://cuveecoffee.com/",
    coords: {lat: 30.261491, lon: -97.721048}
  },
  {
    Name: "Revival Coffee",
    Address: "1405 E 7th St, Austin, TX 78702",
    Website: "http://revivaltexas.com/",
    coords: {lat: 30.264254, lon: -97.727731}
  },
  {
    Name: "Cherrywood Coffeehouse",
    Address: "1400 E 38th 1/2 St, Austin, TX 78722",
    Website: "http://www.cherrywoodcoffeehouse.com/",
    coords: {lat: 30.293563, lon: -97.716021}
  },
  {
    Name: "85°C Bakery Cafe - Austin Airport",
    Address: "6929 Airport Blvd #197, Austin, TX 78752",
    Website: "http://85cbakerycafe.com/",
    coords: {lat: 30.336612, lon: -97.717673}
  },
  {
    Name: "Wright Bros. Brew and Brew",
    Address: "500 San Marcos St #105, Austin, TX 78702",
    Website: "http://www.thebrewandbrew.com/",
    coords: {lat: 30.264374, lon: -97.733037}
  },
  {
    Name: "Merit Coffee",
    Address: "222 West Ave #120, Austin, TX 78701",
    Website: "http://www.meritcoffee.com/",
    coords: {lat: 30.267593, lon: -97.752088}
  },
  {
    Name: "Houndstooth Coffee",
    Address: "11501 Rock Rose Ave Ste 118, Austin, TX 78758",
    Website: "http://houndstoothcoffee.com/",
    coords: {lat: 30.400647, lon: -97.722773}
  },
  {
    Name: "Medici Roasting",
    Address: "1101 W Lynn St, Austin, TX 78703",
    Website: "https://mediciroasting.com/pages/west-lynn",
    coords: {lat: 30.27952, lon: -97.759422}
  },
  {
    Name: "Coffee + Crisp",
    Address: "3220 Amy Donovan Plaza #100, Austin, TX 78758",
    Website: "http://www.coffeeandcrisp.com/",
    coords: {lat: 30.396675, lon: -97.727373}
  },
  {
    Name: "Barrett's Coffee",
    Address: "713 W St Johns Ave, Austin, TX 78752",
    Website: "http://barrettscoffee.com/",
    coords: {lat: 30.33897, lon: -97.717421}
  },
  {
    Name: "Monkey Nest Coffee",
    Address: "5353 Burnet Rd, Austin, TX 78756",
    Website: "https://monkeynestcoffee.com/",
    coords: {lat: 30.327724, lon: -97.739527}
  },
  {
    Name: "Fat Cats Organic Coffee & Desserts",
    Address: "7020 Easy Wind Dr Suite 140, Austin, TX 78752",
    Website: "http://www.fatcatsaustin.com/",
    coords: {lat: 30.338495, lon: -97.718775}
  },
  {
    Name: "Cafe Java",
    Address: "11900 Metric Blvd Suite K, Austin, TX 78758",
    Website: "https://www.facebook.com/Cafe-Java-Austin-350473130184/",
    coords: {lat: 30.400125, lon: -97.703826}
  },
  {
    Name: "Halcyon",
    Address: "218 W 4th St, Austin, TX 78701",
    Website: "http://www.halcyoncoffeebar.com/",
    coords: {lat: 30.267036, lon: -97.745635}
  },
  {
    Name: "Bandit Coffee, Matcha, & Ice Cream",
    Address: "706 N Lamar Blvd, Austin, TX 78703",
    Website: "http://thebandit.com/",
    coords: {lat: 30.273422, lon: -97.753501}
  },
  {
    Name: "Turnstile Coffee Beer and Spirits",
    Address: "10025 Burnet Rd, Austin, TX 78758",
    Website: "http://www.turnstilebrews.com/",
    coords: {lat: 30.384047, lon: -97.723361}
  },
  {
    Name: "Cosmic Coffee + Beer Garden",
    Address: "121 Pickle Rd, Austin, TX 78704",
    Website: "https://www.cosmiccoffeebeer.com/",
    coords: {lat: 30.227475, lon: -97.762977}
  },
  {
    Name: "Sorrento's Coffee Drive-Thru",
    Address: "3021 W Anderson Ln, Austin, TX 78757",
    Website: "http://sorrentoscoffeedrivethru.com/",
    coords: {lat: 30.360217, lon: -97.740351}
  },
  {
    Name: "Lucky Lab Coffee Co.",
    Address: "2421 San Antonio St, Austin, TX 78705",
    Website: "http://www.luckylabcoffee.com/",
    coords: {lat: 30.288573, lon: -97.742116}
  },
  {
    Name: "Codependent Cocktails + Coffee",
    Address: "301 West Ave STE 110, Austin, TX 78701",
    Website: "https://www.codependentatx.com/",
    coords: {lat: 30.267488, lon: -97.751019}
  },
  {
    Name: "Idlewild Coffee",
    Address: "812 W 12th St, Austin, TX 78701",
    Website: "https://www.idlewildcoffee.com/",
    coords: {lat: 30.276377, lon: -97.748981}
  },
  {
    Name: "Flightpath Coffeehouse",
    Address: "5011 Duval St, Austin, TX 78751",
    Website: "http://flightpathcoffeehouse.com/",
    coords: {lat: 30.313769, lon: -97.719875}
  }
];

function restrictMap(map){
  var bounds = new H.geo.Rect(30.397704598324953,-97.82197149621298,30.202843286012932,-97.69906076638804);
  map.getViewModel().addEventListener('sync', function() {
    var center = map.getCenter();

    if (!bounds.containsPoint(center)) {
      if (center.lat > bounds.getTop()) {
        center.lat = bounds.getTop();
      } else if (center.lat < bounds.getBottom()) {
        center.lat = bounds.getBottom();
      }
      if (center.lng < bounds.getLeft()) {
        center.lng = bounds.getLeft();
      } else if (center.lng > bounds.getRight()) {
        center.lng = bounds.getRight();
      }
      map.setCenter(center);
    }
  });
}

function setMapViewBounds(map){
  var bbox = new H.geo.Rect(30.397704598324953,-97.82197149621298,30.202843286012932,-97.69906076638804);
  map.getViewModel().setLookAtData({
    bounds: bbox
  });
}
// Here API Information
var platform = new H.service.Platform({
  'apikey': 'ycAxA8uZf-kPh9Jz-FGc9BttR8Zqv8M6XnO4jhwO6ko'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});

map.getViewModel().setLookAtData({
  tilt: 45
});

var coffeeSvg = '<object data="coffee-svgrepo-com.svg" type="image/svg+xml/>'

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  setMapViewBounds(map);
  restrictMap(map);
}


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
