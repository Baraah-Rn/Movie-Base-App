
#Movie Base App

This is a movies application was build with **React and UI**

**Application Description**
>First the user has to sign up before going to the Main page.
>The user can use **filters** to choose between Movies and Series or both.
>There is Another filter section (Search by year).
>The Application provide also a **Search bar** to allow the user to search by name.
>The Application contain a **Favorite** feature so the use can add/remove  Movie/series to his/her list
>Every result in the Application contain a link and it show more details about it 

**Available Scripts**
### `npm i `
>Make sure to install all packages before start 

### `npm start`
>Runs the app in the development mode.\

**Structure**

├── src
    ├── Components                   
    │   ├──FavoritesComponents                  #Control the favoriet featcure
    │   │                    │──Favorites
    │   │                    │──FavoritesIcon 
    │   │                  
    │   ├──MoviesComponents
    │   │                  │──MainPage        #contain all api and featch to get result
    │   │                  │── MovieCard      #The structure of every Rsult
    │   │                  │──MovieDetails    #The Detailse page and the Extra information 
    │   │                  │──MoviesList      #The List of All results
    │   │     
    │   ├──UserComponents
    │   │                │──Form                 #Handelling seccses submite form 
    │   │                │──FormHandleError      #Handelling Signup Error 
    │   │                │──Signup               #structure of sign up form 
    │   │                │──Form                 #Adding style to the sign up form
    │   │ 
    │   │──Home                                   #Containes All Routes
    │   │──NavBar                                 
    │   │──SearchBox
    │   │
    └── Context
    │          │── FavoritesContext              #Add Remove Functions from favorites         
    │
    └──Hooks
    │       │──useFetch                          #Custom Hook to featch Api and Error 
    │       │──useForm                           #Custom Hook to Control Signup form
    │
    └──img 
    │
    └──App.css                                     #Adding style to the Application
