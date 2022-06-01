import React from "react"
import Contact from './contact'


export default function App() {
  return (
    <div>
      <Contact
        Img = "./images/mr-whiskerson.png"
        Name="Mr. Whiskerson"
        PhoneNumber="(212) 555-1234"
        Email="mr.whiskaz@catnap.meow"
      />
      <Contact
        Img="./images/fluffykins.png"
        Name="Fluffykins"
        PhoneNumber="(212) 555-2345"
        Email="fluff@me.com"
      />
      <Contact
        Img="./images/felix.png"
        Name="Felix"
        PhoneNumber="(212) 555-4567"
        Email="thecat@hotmail.com"
      />
      <Contact
        Img="./images/pumpkin.png"
        Name="Pumpkin"
        PhoneNumber="(0800) CAT KING"
        Email="pumpkin@scrimba.com"
      />
    </div>
)
}

