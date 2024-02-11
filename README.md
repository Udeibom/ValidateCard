# ValidateCard
A code to check the validity of a credit card and also determine if it is MaterCard, VisaCard or Verve.
## The Luhn algorithm is used to check the validity of the cards. Its principle is to calculate, from a number (or a sequence of numbers), a control key (called checksum) which makes it possible to verify that the number is correct (because the key is a number which is dependent on the others) .
## Visa cards start with the digit 4. I made use of the regex pattern "/^4/" to check if the string of numbers start with a 4. If true then it is a Visa card.
## Master cards start with the digit 5 then followed by a digit between 1 and 5, inclusive. The regex pattern "/^5[1-5]/" verifies if this is true.
## Verve cards start with  "5061" or "5067". The regex pattern "/^5061|5067/" verifies if this is true.
