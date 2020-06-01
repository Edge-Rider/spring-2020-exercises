<?php

class Text
{
    public $text = null;

    public function __construct($text)
    {
        $this->text = $text;
    }

    public function getLength()
    {
        return strlen($this->text);
    }

    public function getNrOfWords()
    {
        return str_word_count($this->text);
    }

    public function getNrOfSentences()
    {
        return count(explode('.', $this->text));
    }

    public function getMostCommonWords($how_many)
    {
        // delete all non-word symbols
        // note: this would be much better done using regular expressions
        $text = str_replace(['.', ',', '-', '\'', '’', '“'], '', $this->text);

        // split the text by spaces
        $words = explode(' ', $text);

        // create an array of words and their counts
        $counts = [];

        foreach ($words as $word) {
            $counts[$word] = ($counts[$word] ?? 0) + 1;
        }

        // sort the array by their keys in reverse order (biggest first)
        arsort($counts);

        // slice and return a part of that array
        return array_slice($counts, 0, $how_many);
    }
}