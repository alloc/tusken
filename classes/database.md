The `Database` instance is created by the generated Tusken client. Every query starts with this object.

The list of available methods is:

- [count](/queries/count)
- [delete](/queries/delete)
- [find](/queries/find)
- [get](/queries/get)
- [innerJoin](/queries/innerJoin)
- [put](/queries/put)
- [select](/queries/select)

### connect

Create another `Database` instance with new connection options.

### client

The `pg` client instance.

You can use this to send SQL strings manually (if Tusken can't meet your needs), but please file a feature request afterwards. 😉
