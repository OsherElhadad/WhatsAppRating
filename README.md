# Getting Started

* Make sure MariaDB is installed. If not, please download it from here: https://mariadb.org/
* Clone this repository.
* Open the project with IDE like- visual studio 2022 and make sure WhatsAppRating.sln is set as the project solution.
* To work with MariaDB using an Entity Framework, we will use the Pomelo Entity Framework. It is available as a NuGet package here: https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql <br>
You can simply open the package manager (PM) console
(In Visual Studio 2022 -> View -> Other Windows -> Package Manager Console).
* Next, on the Package Manager Console, please enter the following command: <br> $ Install-Package Pomelo.EntityFrameworkCore.MySql -Version 6.0.1

* Then, install the Microsoft Entity Framework Tools package by entering the following command: <br> $ Install-Package Microsoft.EntityFrameworkcore.Tools -version 6.0.1

* Finally create the database:
  1) Navigate on the cloned directory to: WhatsAppRating\Data\RatingContext.cs and change your mariaDB password in connectionString- "...password={your password}..."
  2) Apply the migration by entering on the Package Manager Console: $ update-database

Note: We are working with .NET version 6.0.1.
	  Please make sure it is installed. 

Make sure to start the Web Api side. You can follow the instructions on here: https://github.com/OsherElhadad/WhatsAppApiServer
Make sure to start the React web side. You can follow the instructions on here: https://github.com/yossix07/WhatsAppReactClient

You are ready to start!
In oreder to run the mvc ratings project, open the project with IDE (like visual studio 2022) and press run.
<br>
All you need to do now is to wait for your browser to open, which indicates that the project is ready and running.

## Index Page

* This is the home page http://localhost:5266/Ratings/Index.
* Has button that redirects to WhatsApp web (You can find more information about this page on here: https://github.com/yossix07/WhatsAppReactClient).
* Has button to Create page (add new rating).
* Shows the average of the all ratings.
* Shows the all rating and can be filtered by Nickname or/and Description.
* There is an option for any rating to redirect to it's Details/Edit/Delete rating page.

## Create Page

* This page allows you to create a new rating http://localhost:5266/Ratings/Create.
* The Nickname and rating fields are requierd and the Descriprion is optional. In case one of the mentioned is empty or invalid (will be explanied in a bit), the system won't allow you to create rating.
* When all required fields are filled and valid, you will be able to submit your request to create rating.
* Has a link back to index page.

Fields requirement in-depth:
- Nickname must be one word with length greater or equals to 1.
- Rating must be 1-5 value.
- Description is optional and can have any character until 2000 characters.

## Edit Page

* This page allows you to edit an existing rating http://localhost:5266/Ratings/Edit/{Id}.
* The Nickname and rating fields are requierd and the Descriprion is optional. In case one of the mentioned is empty or invalid (will be explanied in a bit), the system won't allow you to update rating.
* When all required fields are filled and valid, you will be able to submit your request to update rating.
* Has a link back to index page.

Fields requirement in-depth:
- Nickname must be one word with length greater or equals to 1.
- Rating must be 1-5 value.
- Description is optional and can have any character until 2000 characters.

## Delete Page

* This page allows you to delete an existing rating http://localhost:5266/Ratings/Delete/{Id}.
* It shows it's details and has a delete button that delete this rating.
* Has a link back to index page.

## Details Page

* This page shows an existing rating http://localhost:5266/Ratings/Details/{Id}.
* The Nickname and rating fields are requierd and the Descriprion is optional.
* Has a link back to index page.
* Has a link to edit page.

## MariaDB

* There is a database named: WhatsAppRatingDB.
* There is a table named Ratings with these fields:
  1) Id (key)- a number (auto increase).
  2) Description- a string with 0-2000 characters.
  3) Nickname- a string with 1-100 characters.
  4) Rate- a number from 1-5.
  5) Time- a date.
