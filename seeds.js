const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const User = require('./models/user');
const passport = require("passport");

async function seedUser() {
/*    User.deleteMany({}, function () {

    });*/
    const username = {username: 'test user'},
        password = '123';

    return user = User.register(username, password)
        .catch(function () {
            return User.findOne(username).exec();
        });
}
//"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!"

const campgrounds = [
    {
        name: "Goat's Camp",
        price: '10',
        image: "https://images.unsplash.com/photo-1568740700094-3aa254e34daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!",
        location: "Tilcara",
        country: "AR",
        coordinates: [-65.36400725897624,-23.569499527608272]
    },
    {
        name: "Garganta del Diablo",
        price: '29',
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Foz_de_Igua%C3%A7u_27_Panorama_Nov_2005.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!",
        location: "Iguazu",
        country: "AR",
        coordinates: [-54.6155043621975,-26.024154911176346]
    },
    {
        name: "Whale's Rest",
        price: '100',
        image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!",
        location: "Madryn",
        country: "AR",
        coordinates: [-65.03773250862196,-42.77002493493132]
    }
]

/*async function seedUser2() {
    const seedUsername = {username: 'test user'},
        seedPassword = {password: '123'},
        options = {new: true, upsert: true, setDefaultsOnInsert: true};
    let seededUser;

    return seededUser = await User.findOneAndUpdate(seedUsername, seedPassword, options,
        function (err, result) {
            if(!err){
                seededUser = result; //I want seedUser() to return this value
            }
        });
}*/

async function seedDB() {

    let user = await seedUser()
    console.log('Register ' + user.username);
    Campground.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Remove campgrounds");
            //remove comments
            Comment.deleteMany({}, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Remove comments");
                }
            })
            //add demo campgrounds
            campgrounds.forEach(function (seed) {
                Campground.create(seed, function (err, savedCampground) {
                    if (err) {
                        console.log(err);
                    } else {
                        savedCampground.author = user;
                        //add demo comment
                        Comment.create({
                            text: "Test comment added by seed function",
                            author: user
                        }, function (err, savedComment) {
                            if (err) {
                                console.log(err);
                            } else {
                                savedCampground.comments.push(savedComment);
                                savedCampground.save();
                                console.log("Added a campground: " + savedCampground.name +
                                    " - added by: " + savedCampground.author.username);
                            }
                        })

                    }
                })
            })

        }
    })

}


module.exports = seedDB;