import { createAvatar } from "@dicebear/core";
import * as Avataaars from '@dicebear/avataaars'
import Post from "./Post"
import { useCallback, useMemo } from "react";

const array = ["angel", "Salem", "Sammy", "Scooter", "Harley", "Abby", "Annie", "Casper", "Misty", "Lucky", "Cali"]

const Posts = ({ items }: { items: any[] }) => {

    const avatar = useCallback(() => {
        return createAvatar(Avataaars, {
            size: 10,
            backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
            seed: getRandomItem(array),
            backgroundType: ['gradientLinear'],
            accessoriesProbability: 50

            // ... other options
        }).toDataUriSync()
    }, []);

    return <ul className="px-8 divide-y-2 divide-opacity-70 divide-indigo-200 -mt-8">
        {
            items.map((i, index) => {

                return <li className="mb-6">
                    <Post
                        username="Dolu Adekile"
                        imageUrl={avatar()}
                        key={index}
                        body="Sed ut perspiciati sunde omniste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    />
                </li>
            })
        }
    </ul>
}

export default Posts

// program to get a random item from an array

function getRandomItem(arr: any[]) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
