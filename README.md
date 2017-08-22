# This is a basic On-line shop for Valtech test
## This test was built using ASP.NET, MVC 5, EF 6 with Code First, DDD architecture and Knockout.js on frontend

Steps to run it:

First clone the repository, then:

0 - Open the project with Visual Studio (I used the 2017 Community version).

1 - Restore nuget packages;

2 - Change connection string inside Valtech.MVC\Configuration\connectionStrings.config (be aware to use a user with permissions to alter the database)

3 - Restore the database

	  -> (Some data will be created already to make the tests easy, you can comment the content of Seed method inside Configuration.cs file if you don't want those data to be restored).
    
	  -> Open Package Manager Console.
    
	  -> Select '4 - Infra\4.1 - Data\Valtech.Data' project.
    
	  -> Type and execute 'update-database' on console.
  
4 - Now just run the project (f5).
