See the current pricing structure, this is what I wanted not the current one. So this is just a structure, as these values in formulas will be different for each product

I want a fully customized pricing system at the admin dashboard side in which for a product I can change pricing in it, created variables, and that specific section will give us a cost, that will be added to the total one for that specific product


So these are the sections that are final for every product but ofcourse the values and formulas can be or can not be different. So I want customizations and when I save that will also be reflected in the DB.


Initially we will have this from the user 



Length 

Width

Height

PT (For the GSM Table) >> Cardboard and kraft meh only 
Units user wants:

Printing: Single Side, Both Side, None
Lamination: Glossy, Matt, Soft Touch, None



**1. Material Cost**


------------------------------------------------------------

From below formulas we will calculate our length and width

Formula for length = (Length x 2>> editable) + (width x 2>> editable) + 1.5 >> editable

Formula for width = (Height x 2 >> editable) + Length + 2 >> editable

GMS Table:
pt	GSM	Kraft	Cardboard	Corrugated
14	250	400	300	 	 
16	300	400	300	 	 
18	350	400	300	 	 
N/A	700	 	 	300	 

Weight of 100 units = Lenght x Width x 300 (GSM from Table) / / 15500 (This should be editable) 

Cost of 100 units =  Weight of 100 units x 300 (This is rate, should be edit

Cost of Client Units = ( Cost of 100 units ) / 100 x (User's required units)








**2. Scanning Section (ok)**


200 (Make it editable for each product)

------------------------------------------------------------



**3. Plates Cost (According to Length Ranges)**

In these section add checks for 4 ranges but makes values editable

(0.1 to 12.5 \&\& 0.1 to 18) // (12.6 - 18 \&\& 18.1 - 25) // (18.1 -20 \&\& 25.1 - 30) // (20.1-28 \&\& 30.1 - 40)



Outside  Inside Both Side None Outside  Inside BothSide None  \\\\ Outside  Inside   BothSide None \\\\ Outside  Inside BothSide None

1200	 1200	2400	  0        2400	   2400	   4800	    0 		5000	 5000	10000	  0        8000	   8000	   1600	    0


you should add an option to add ranges, in which we can add custom ranges of two in which we add a custom cost, so if length will fall in that range that cost will be used


------------------------------------------------------------


**4. Printing Cost (According to Length Ranges 1000 rule \& User's selections of the printing)**

In these section add checks for 4 ranges but makes values editable

(0.1 to 12.5 \&\& 0.1 to 18) // (12.6 - 18 \&\& 18.1 - 25) // (18.1 -20 \&\& 25.1 - 30) // (20.1-28 \&\& 30.1 - 40)

Outside  Inside BothSide None \\\\ Outside  Inside BothSide None  \\\\ Outside  Inside   BothSide None \\\\ Outside  Inside BothSide	None   

3500	 3500	7000	  0        6000	   6000	   12000    0		8000	8000	16000	 0          10000  10000    20000        0


you should add an option to add ranges, in which we can add custom ranges of two in which we add a custom cost, so if length will fall in that range that cost will be used



1 - 1000 units = 1x multiplier to cost 
1001 - 2000 units = 2x multiplier to cost 
2001 - 3000 units = 3x multiplier to cost 
so on to 20000 = 20x multiplier


------------------------------------------------------------


**5. Lamination (No lamination in Kraft)  (One time cost) (User will tell us from form >> Glossy and Matt Finishing // Soft touch) >>** 


**Glossy** 

Formula: Length x width/144 (this value should be editable)
Answer x 3.5 (this value should be editable)

Now multiple the answer with the (User's requried quantity)

**Matt Finishing:**

Formula: Length x width/144 (this value should be editable)

Single unit lamination cost = Answer x 3.5 (this value should be editable)

Total Lamination cost = Now multiple the answer with the quantity.


**Soft touch:**

Formula: Length x width/144 (this value should be editable)

Single unit lamination cost = Answer x 20 (this value should be editable)



Total Lamination cost = Now multiple the answer with the quantity.



**None: No Cost**



------------------------------------------------------------



6.**Die Making Cost (One time Cost):**

Formula: Length x width x 9 (this value should be editable)

--------------------------------------------------------------------




7. **Die Cutting Cost:

1000 units cost is 1000**

1 - 1000 = 1000
1001 - 2000 = 2000
2001 - 3000 = 3000
so on
20000 >> 



----------------------------------------------------

8.**Pasting Cost:**



**1000 units cost is 1000**

1 - 1000 = 1000
1001 - 2000 = 2000
2001 - 3000 = 3000
so on


---------------------------------------------------


9. **Multiplication of 2 piece box** (make this a bool so I can make it active/not active for a product)


add a true false here, if it is true this section will sum all the previous sections cost and multiply it by 2x.

---------------------------------------------------


10. **Printing both side Percentage**

Add **10%** of the previous all sections costs if the user has selected both sides printing


10.**Vendor percentage**


now here add a custom field in which, we can apply a percentage which will sum all the previous sections cost, apply that percentage and calculate cost for this section.

-------------------------------------------------------------------




11. **Shipping Cost


Single unit weight Formula: (k x 0.9 >> Editable) / 100** Editable



how to calculate weight per unit = k x          

(where k = weight of 100 units we calculated in material cost calculation) 


now multiply the answer with Required user's units 


Now apply range of the table




