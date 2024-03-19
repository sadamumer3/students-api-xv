
# Student API (CRUD Operations)

**1. Dependencies**:

- `express`: Web framework for building APIs
- `joi`: Library for data validation

**2. Data Storage**:
- An in-memory fixed static array (`students`) holds student objects with `id` and `name` properties.

**3. Endpoints**:
- `GET /`: Returns "Welcome" message.
- `GET /ge`t: Retrieves all students from the array.
- `GET /get/:id`: Gets a specific student by ID (`404` if not found).
- `POST /set`: Creates a new student with validated name (`400` for invalid name).
- `POST /set/:id`: Updates an existing student's name (`404` if not found, `400` for invalid name).
- `DELETE /delete/:id`: Deletes a student by ID (`404` if not found).

**4. Validation**:
- Joi schema enforces a minimum length of 3 characters for student names in `POST` requests.

**5. Error Handling**:
- Returns appropriate error codes (`400`, `404`) with messages for validation errors and missing students.

> Mar 2022: While learning nodeJS, I initially built this basic API 
## Authors

- [@sadamumer3](https://www.github.com/sadamumer3)

