<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <title>Jennifer Smith</title>
    <!-- bootstrap link  -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    />

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
      rel="stylesheet"
    />
    <!-- css link  -->
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <!-- navagation bar  -->
    <header class="header w-100 bg-dark text-white">
      <h1>Jennifer Smith</h1>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link bg-secondary text-white"
            id="home-tab"
            data-toggle="tab"
            href="index.html"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Home</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link bg-secondary text-white"
            id="profile-tab"
            data-toggle="tab"
            href="portfolio.html"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >Portfolio</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="contact-tab"
            data-toggle="tab"
            href="contact.html"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >Contact</a
          >
        </li>
      </ul>
    </header>