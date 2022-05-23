# Getting Started

Clone this repository.
Open the project with IDE like- visual studio 2022.
To run this app on your computer please make sure MariaDB is installed. 
If not, please download it from here: https://mariadb.org/

To work with MariaDB using an Entity Framework, we will 
use the Pomelo Entity Framework. 
It is available as a NuGet package here: https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql
You can simply open the package manager (PM) console
(In Visual Studio 2022 -> View -> Other Windows -> Package Manager Console).

And enter the following command:
"Install-Package Pomelo.EntityFrameworkCore.MySql -Version 6.0.1"
(*without the quotation marks*)

Then, install the Microsoft Entity Framework Tools package
by entering the following command:
"Install-Package Microsoft.EntityFrameworkcore.Tools -version 6.0.1"

Finally create the database:
  1) Change to your mariaDB password at RatingsContext.cs in connectionString- "...password={your password}..."
  2) Then apply the migration using: "update-database"

Note: We are working with .NET version 6.0.1.
	  Please make sure it is installed. 

Make sure to start the Web Api side. You can follow the instructions on here: https://github.com/OsherElhadad/WhatsAppApiServer
Make sure to start the React web side. You can follow the instructions on here: https://github.com/yossix07/whats-app-web-ex2

Now you are ready to start!
In oreder to run the mvc ratings project, open the project with IDE (like visual studio 2022) and press on run.
<br>
All you need to do now is to wait for the web to open on you browser.

## Index Page

* This is the home page.
* Has button that redirects to WhatsApp web (You can find more information about this page on here: https://github.com/OsherElhadad/WhatsAppApiServer).
* Has button to Create page (add new rating).
* Shows the average of the all ratings.
* Shows the all rating and can be filtered by Nickname or/and Description.
* There is an option for any rating to redirect to it's Details/Edit/Delete rating page.

## Create Page

* This page allows you to create a new rating.
* The Nickname and rating fields are requierd and the Descriprion is optional. In case one of the mentioned is empty or invalid (will be explanied in a bit), the system won't allow you to create rating.
* When all required fields are filled and valid, you will be able to submit your request to create rating.
* Has a link back to index page.

Fields requirement in-depth:
- Nickname must be one word with length greater or equals to 1.
- Rating must be 1-5 value.
- Description is optional and can have any character until 2000 characters.

## Edit Page

* This page allows you to edit an existing rating.
* The Nickname and rating fields are requierd and the Descriprion is optional. In case one of the mentioned is empty or invalid (will be explanied in a bit), the system won't allow you to update rating.
* When all required fields are filled and valid, you will be able to submit your request to update rating.
* Has a link back to index page.

Fields requirement in-depth:
- Nickname must be one word with length greater or equals to 1.
- Rating must be 1-5 value.
- Description is optional and can have any character until 2000 characters.

## Delete Page

* This page allows you to delete an existing rating.
* It shows it's details and has a delete button that delete this rating.
* Has a link back to index page.

## Details Page

* This page shows an existing rating.
* The Nickname and rating fields are requierd and the Descriprion is optional.
* Has a link back to index page.
* Has a link to edit page.
