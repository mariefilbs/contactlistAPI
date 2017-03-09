##Contact List API Documentation.##

###Url:###
>     /contacts

###Method:###
>     POST | GET

###**Required** for POST:###
>     name: string,
>     phone_number: string

###Optional:###
>     city: string,
>     state: string,
>     photo_url: string,
>     Website: string

###Url:###
>     /contacts/:id

###Method:###
>     GET | PUT | DELETE

###Optional for PUT:###
>     name: string,
>     phone_number: string,
>     city: string,
>     state: string,
>     photo_url: string,
>     website: string
