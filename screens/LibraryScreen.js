import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Book from '../components/Book';

export default function LibraryScreen({navigation}) {
    const [books, setBooks] = useState([
        {
            id: 1, 
            title: "Game of Thrones",
            author:"George R. R. Martin", 
            image:'https://canary.contestimg.wish.com/api/webimage/5d80dbaab2d168248df241a6-large.jpg?cache_buster=5e0561ab95d948cb52d647da25d32eae',
            description: "Après avoir tué le monarque dément Aerys II Targaryen, Robert Baratheon est devenu le nouveau souverain du royaume des Sept Couronnes. Tandis qu'en son domaine de Winterfell, son fidèle ami le Duc Eddard Stark rend paisiblement la justice. Mais un jour, le roi Robert lui rend visite, porteur de sombres nouvelles : le trône est en péril. Stark, qui s'est tenu toujours éloigné des affaires du pouvoir, doit alors abandonner les terres du Nord pour rejoindre la cour et ses intrigues. L'heure est grave, d'autant qu'au-delà du Mur qui protège le royaume depuis des siècles, d'étranges créatures rôdent."
        },
        {
            id: 2, 
            title: "Harry Potter" ,
            author:"J. K. Rowling",
            image:'https://image.posterlounge.fr/images/l/1893834.jpg', 
            description: "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir."
        },
        {id: 3, 
            title: "Twilight" ,
            author:"Stephenie Meyer",
            image:'https://p6.storage.canalblog.com/67/33/398363/28052062_p.jpg', 
            description: "Isabella Swan, 17 ans, déménage à Forks, petite ville pluvieuse dans l'Etat de Washington, pour vivre avec son père. Au lycée, elle est terriblement intriguée par le comportement d'une étrange fratrie, deux filles et trois garçons. Bella tombe follement amoureuse de l'un d'eux, Edward Cullen. Une relation sensuelle et dangereuse commence alors entre les deux jeunes gens : lorsque Isabella comprend que Edward est un vampire, il est déjà trop tard."
        },
        {
            id: 4, 
            title: "Star Wars" ,
            author:"George Lucas",
            image:'https://images-na.ssl-images-amazon.com/images/I/71MKj4j-isL._AC_SL1200_.jpg', 
            description: "Il y a bien longtemps, dans une galaxie très lointaine. La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi."
        },
        {id: 5, 
            title: `Le Seigneur${"\n"}des Anneaux`,
            author:"J. R. R. Tolkien",
            image:'https://m.media-amazon.com/images/I/51cw3aOJmOL._AC_.jpg', 
            description: "Un jeune et timide `Hobbit', Frodon Sacquet, hérite d'un anneau magique. Bien loin d'être une simple babiole, il s'agit d'un instrument de pouvoir absolu qui permettrait à Sauron, le `Seigneur des ténèbres', de régner sur la `Terre du Milieu' et de réduire en esclavage ses peuples. Frodon doit parvenir jusqu'à la `Crevasse du Destin' pour détruire l'anneau."
        },
        {id: 6, 
            title: "Le Hobbit" ,
            author:"J. R. R. Tolkien",
            image:'https://images-na.ssl-images-amazon.com/images/I/51uuPeghaNL._AC_.jpg', 
            description: "Bilbon n'est plus tout jeune et décide d'entamer la rédaction de ses Mémoires ; il commence par faire le récit de l'aventure qu'il vécut quelque soixante ans plus tôt. Il se remémore notamment, alors qu'il profitait paisiblement de sa journée, l'arrivée du sorcier Gandalf. Ce dernier avait vu en lui la personne capable d'aider des nains barbus à retrouver leur trésor volé par le terrifiant dragon Smaug."
        },
      ])
    return (
        <ScrollView >
            <Book data={books} navigation={navigation}/>
        </ScrollView>
    )
}