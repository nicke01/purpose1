var scobki, sum = "", check = true, first_s, j, sub;

function inFunc()
{
   scobki = prompt("Введите скобки:");
}

function outFunc()
{
   for (var i = 0; i < scobki.length; i++)
   {
      switch (scobki[i]) {
         case "(":
            sum += "1";
            break;
         case ")":
            sum += "1";
            break;
         case "[":
            sum += "2";
            break;
         case "]":
            sum += "2";
            break;
         case "{":
            sum += "3";
            break;
         case "}":
            sum += "3";
            break;
      }
   }

   for (var i = 0; i < sum.length && check != false; i++)
   {
      first_s = sum[i];
      j = i;
      i++;
      while (check == true && i < sum.length)
      {
         if (sum[i] == first_s)
         {
            sub = sum.slice(j, i+1);
            if (sub.slice(0, (i+1-j)/2) == reverse(sub.slice((i+1-j)/2, i+1)))
               check = true;
            else
               check = false;
         }
         i++;
      }
   }

   alert(check);
}

function reverse(array) {
   var output = [], i = array.length, j;
   for (j = 0; i >= 0; j++, i--){
     output[j] = array[i];
   }
   output = output.toString().replace(/,/g, '');

   return output;
}

inFunc();
outFunc();
