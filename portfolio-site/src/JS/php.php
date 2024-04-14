<?php

    header('Content-Type: application/json');

    class Image {
        public $source;
        public $title;
        public $descrip;
    
        public function __construct($source, $title, $descrip) {
            $this->source = $source;
            $this->title = $title;
            $this->descrip = $descrip;
        }
    }

    $imageArray = [
        new Image("./Media/Images/03.JPG", "Bo & Mara", "Two of us lost in game"),
        new Image("./Media/Images/05.JPG", "Cardinality", "Sullen love"),
        new Image("./Media/Images/02.JPG", "Abstraction", "Untold stories"),
        new Image("./Media/Images/04.JPG", "Lost Lover", "A feeling unwished"),
        new Image("./Media/Images/00.JPG", "Display", "Those unfounded"),
        new Image("./Media/Images/01.JPG", "King Regent", "Above all")
    ]

    // Convert all to JSON for react to traverse
    $jsonData = json_encode($imageArray);

    echo $jsonData;
    
?>