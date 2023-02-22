let products = [
  {
    title: "American Professional II Telecaster",
    price: 1799.99,
    type: 'Electric Guitar',
    popular: true,
    id: 123,
    description: `The American Professional II Telecaster® draws from more than seventy years of innovation, inspiration and evolution to meet the demands of today’s working player.

    Our popular Deep "C” neck now sports smooth rolled fingerboard edges, a “Super-Natural” satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Telecaster single-coil pickups are more articulate than ever while delivering the twang, snap and snarl that made the Tele famous. The new top-load/string-through bridge with compensated “bullet” saddles is our most comfortable, flexible Tele bridge yet – retaining classic brass-saddle tone and providing excellent intonation and flexible setup options, allowing you to tailor the tension and tone of each string to your liking.`,
  },
  {
    title: 'Tim Armstrong Hellcat',
    price: 759.99,
    type: 'Acoustic Guitar',
    popular: true,
    id: 234,
    description: `Available in a left-handed version (appropriately, considering its designer is a southpaw), the Tim Armstrong Hellcat is designed by its namesake, the founder of influential U.S. punk band Rancid. As a songwriter, Armstrong has always turned to his old Fender concert-style acoustic for inspiration. The Hellcat was based on that classic instrument, with modern appointments such as high-quality onboard electronics. A great guitar for pop, rock, folk and more, it has a solid mahogany top for a sweet sound and a satin-finish maple neck for smooth playability.`
  },
  {
    title: 'American Ultra Jazz Bass',
    price: 2249.99,
    type: 'Electric Bass',
    popular: true,
    id: 345,
    description: `American Ultra is our most advanced series of guitars and basses for discerning players who demand the ultimate in precision, performance and tone. The American Ultra Jazz Bass features a unique “Modern D” neck profile for hours of playing comfort, and the tapered neck heel allows easy access to the highest register. A speedy 10”-14” compound-radius fingerboard with 21 medium-jumbo frets means effortless action, while the Ultra Noiseless™ Vintage pickups and redesigned preamp provide endless tonal possibilities – without hum. The sculpted rear body contours are as beautiful as they are functional. This versatile, state-of-the-art instrument will inspire you to push your playing to new heights.

    Other features include “F”-stamped lightweight vintage-paddle tuning machines with tapered shafts, chrome hardware and bone nut. Includes premium molded hardshell case.`
  },
  {
    title: 'American Original Jaguar',
    price: 2249.99,
    type: 'Electric Guitar',
    popular: false,
    id: 456,
    description: 'Never resting in our mission to make life better for musicians, we created the short-scale Jaguar guitar in 1962. Originally released as our feature-rich, top-of-the-line electric guitar, it inspired the heroes of the musical underground and hit its stride with surf, punk and alternative guitarists. The American Original ‘60s Jaguar brings that supple sound and slinky playability to life again, slightly tweaked for a modern feel.'
  },
  {
    title: 'Player Plus Telecaster',
    type: 'Electric Guitar',
    price: 949.99,
    popular: false,
    id: 567,
    description: `Fusing classic Fender® design with player-centric features and exciting new finishes, the Player Plus Telecaster® delivers superb playability and unmistakable style. Powered by a set of Player Plus Noiseless™ pickups, the Player Plus Tele® delivers warm, sweet Tele® twang – without hum. A push-pull switch on the tone control engages both pickups in series operation, delivering increased output and body. The silky satin Modern “C” Player Plus Tele® neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12” radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. A modern 6-saddle Tele bridge with block steel saddles adds a touch of brightness while providing precise intonation and the locking tuners provide rock-solid tuning and make string changes quick and easy. With classic Fender style, advanced features and stunning new finishes, the Player Plus Telecaster is the perfect tool to spark your creativity and stand out from the crowd.`
  },
  {
    title: 'CC-60S Concert',
    type: 'Acoustic Guitar',
    price: 199.99,
    popular: false,
    id: 678,
    description: `Compact and comfortable, the CC-60S is ideal for beginning players. The smaller concert-sized body is easy to maneuver in any playing position, with an articulate voice that's great for fingerpicking. Its tuneful solid spruce top, easy-to-play neck, and mahogany back and sides make the CC-60S a perfect choice for the beach, the patio or the coffeehouse.`
  },
  {
    title: 'CN-140SCE',
    type: 'Acoustic Guitar',
    price: 429.99,
    popular: false,
    id: 789,
    description: `The Classic Design CN models combine the easy playability and distinct tone of nylon strings with the comfort of steel-string spacing. We've replaced the typically wide necks normally found on classical guitars with the same easy-playing neck profile found on all other Classic Design models. As a nod to tradition, the CN-140SCE uses a solid cedar top, along with Ovangkol back and sides for a warm and mellow tone.

    The CN-140SCE provides a supremely comfortable experience for players of any skill level—the 'thinline' concert body makes it a perfect guitar for the living room and stage alike, while the single cutaway makes it easy to access higher frets. When the need to plug in arises, this model's onboard Fishman® electronics provide straightforward, yet powerful tonal control.`
  },
  {
    title: 'American Vintage Bass',
    type: 'Electric Bass',
    price: 2249.99,
    popular: false,
    id: 890,
    description: `The Fender® American Vintage II series presents a remarkably accurate take on the revolutionary designs that altered the course of musical history. Built with period-accurate bodies, necks and hardware, premium finishes and meticulously voiced, year-specific pickups, each instrument captures the essence of authentic Fender craftsmanship and tone.

    The Precision Bass®, the world’s first electric bass, represents one of the most important developments in music history. For the first time, bass players had access to a portable, precisely intonated, amplified instrument. As stated by the legendary Quincy Jones, the Fender bass was “…the one technological breakthrough that changed music forever.”`
  },
  {
    title: 'Jaco Pastorius Jazz Bass',
    type: 'Electric Bass',
    price: 1149.99,
    popular: false,
    id: 901,
    description: `Widely regarded as the world's greatest electric bass player, Jaco Pastorius redefined the voice of the instrument and the role of the bassist, merging the worlds of R&B, rock, jazz, classical and Caribbean music and reshaping the musical landscape with his dazzling playing and visionary approach. And he did it all with a Jazz Bass. His unmistakable voice and signature sound came from his mind, his heart, his hands and his sunburst fretless Jazz Bass, recreated here with unmistakable look, tone and feel as the Jaco Pastorius Jazz Bass.`
  },
]

let users = [{
  id: 1234,
  cartItems: [
    {
      itemId: 123,
      quantity: 1
    }
  ]
}]

module.exports = {products, users}