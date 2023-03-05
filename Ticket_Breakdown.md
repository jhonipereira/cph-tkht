# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Hello! Below is my ticket breakdown. I assume that the task at this first moment was requested only so that the Facilities could use their own IDS for better understanding and continuity of identification. Because of that, I'm guessing the system will continue using its own internal id, and the custom_id field will be just a string. Suppose the field is to be used as a new internal field as well. In that case, more tickets will be needed, such as changing the getShiftsByFacility method to accept the new field instead of the old one and changing other tables such as the Shifts table and all the others that have an association with Agents.

1. Create a new field (custom_id) in the Agent table: Depending on the structure of the company/team, access to the database is limited. So I think creating a ticket only for this specific task is good. That’s the starting point to make it possible that the Facilities can use custom IDs for each agent. 
AC: the field (custom_id) must be present in the Agent table on the database.
Estimation: 1-2 hours


2. Create a new "Custom Id" input field in the Agent crud form: The next ticket is to create the input field to create and edit the Agent information. The input field can be optional (I’m guessing here) and have a maximum of 100 characters. No input mask is necessary. The custom_id must be unique for each Facility
AC: the input field must be present in ALL the forms that create and edit the Agent information. Facilities can update the Agent's custom_id only if they haven't used the same custom_id before in another Agent (unique for each Facility).
Estimation: 4-5 hours for development, 2-3 hours for testing 


3. Replace Agent's "id" for "custom_id" in the generateReport method: Replace the information AGENT ID shown on the generateReport method to show the new database field “custom_id”. 
AC: the report generated is showing the new Agent's custom_id field.
Estimation: 1-2 hours for development, 1 hour for testing


4. Add "custom_id" to the metadata returned by the method getShiftsByFacility: make sure the new Agent's custom_id field is being returned in the getShiftsByFacility method. Guessing: If the new field is empty, continue to show the internal database id.
AC: the field custom_id is being returned
Estimation: 1-2 hours for development, 1-2 hours for testing