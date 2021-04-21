<h1 style="color: orange">
Rhino Coffee
<img src =public/images/rhino_coffee.png width="75" align="right">
</h1>

Rhino Coffee is an e-commerce site where users can purchase packaged coffee and tea products.

<h2 style="color: orange">Technologies Used</h2>
<li>JavaScript</li>
<ul>
React<br>
JSON<br>
&nbsp &nbsp Web Token<br>
Jest
</ul>
<li>NodeJs</li>
<ul>
Axios<br>
BCrypt<br>
CORS<br>
Dotenv<br>
Express
</ul>   
<li>PostgreSQL</li>  
<li>Stripe</li>
<li>Materia UI</li>

<h2 style="color: orange">Special Gotchas of the Project</h2>
<li>Maintaining Git branches.</li>
<ul>Learning by doing and making mistakes. Keep it clean!</ul>
<li>Stripe form wasn't allowing user information to be input.</li>
<ul>
Moving the form outside of the self-closing shopping cart drawer to it's own page allowed user to complete a purchase by accepting input information.
</ul>
<li>Project dependency tree being out of order</li>
<ul>Add "SKIP_PREFLIGHT_CHECK=true" to .env file to bypass error message(s).</ul>

<ul>
To fix the dependency tree, try following the steps below in the exact order:

1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
2. Delete node_modules in your project folder.
3. Remove "webpack" from dependencies and/or devDependencies in the package.json file in your project folder.
4. Run npm install or yarn, depending on the package manager you use.
</ul>

<h2 style="color: orange">Running Code in Development</h2>

Clone the repo from [this address.](https://github.com/GenesisSquad/Grace-shopper)  

`npm install` in project root directory. Dependencies can be observed in package.json file.  

For mac users:
`npm run start-dev-mac`  
For windows users:
`npm run start-dev-win` 

To run server and/or webpack separately,  
`npm run start-server` and `npm run build-client`  

<h2 style="color: orange">Contribution Guide</h2>
The contribution process on GitHub is...

1. Make an issue (or multiple issues)  
2. Make a PR that references that issue
3. Get it code reviewed by someone on the team, address any comments

<h2 style="color: orange">Code Style Guide</h2>
<li>Use semicolons</li>
<li>Trailing commas where possible</li>
<li>Use `const` or `let` over `var`</li>
<li>Use `require` and `module.exports` in `.js` files</li>
<li>Use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code</li>
<li>Put import statements at top</li>
<li>Put the default export at bottom</li>
<li>Define components and pages in appropiate directories</li>
<li>Name database and server files using lowercase-and-underscores</li>
<li>Name component and pages files using PascalCase</li>
<li>Double quotes for strings </li>
<li>No unused variables</li>
<li>Space after keywords `if (condition) { ... }`</li>
<li>Space after function name `function name (arg) { ... }`</li>
<li>Always use `===` instead of `==`</li>

<h2 style="color: orange">Links</h2>

[GitHub](https://github.com/GenesisSquad/Grace-shopper)  
[Heroku](https://rhinocoffee.herokuapp.com/)  
