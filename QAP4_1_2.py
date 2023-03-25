# ONE STOP INSURANCE COMPANY Monthly Sales Graph
# Program to plot graph using matlibplot
# Author: Phil St Croix
# Written: Mar 18, 2023

import matplotlib.pyplot as plt

# Make a list of the 12 months
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
# make an empty sales list
sales = []

# get sales for each month from user input
for month in months:
    sales.append(float(input(f"Enter sales for {month}: ")))

# plot sales against months
plt.plot(months, sales)

# add labels and title to the graph
plt.xlabel('Month')
plt.ylabel('Total Sales ($)')
plt.title('Total Sales by Month')

# display the graph
plt.show()
