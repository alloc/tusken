Let's learn how to setup an environment for integration tests that run your queries in an actual database.

## Project structure

If you're building a UI, I recommend keeping all of your database stuff in a separate package, so there's an explicit boundary between your UI and your database. This makes it easier to test your UI without having to worry about the database, and vice versa.

### Vitest

In the Tusken monorepo, we use Vitest for integration tests (and all others), so you already have an example to follow. That said, we could make things even easier for you in the future by providing a `@tusken/test` package that implements the Vitest setup for you. But for now, here's an overview of what we do.

### Database setup + teardown

The `spec/db.ts` module holds all the database setup and teardown code, such as the `beforeEach` hook that resets the database between tests. There are actually 2 databases involved. I'll explain why in the next two sections.

The first of them is called `test`. This database is where we design the tables used by tests and prepopulate them with dummy data using a Postgres admin GUI like Postico (since that's usually simpler than writing code). The `test` database is used to generate 2 artifacts to be stored in version control (the `data.dump` and `schema.sql` files). These artifacts are used to restore the other database to its initial state before each test.

The second database is the throwaway database. We named it `e2e` (after the `spec/e2e.ts` file that uses it). This database helps us avoid accidental data loss in the `test` database.
