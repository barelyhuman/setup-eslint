# setup-eslint

> CLI Wrapper to clone my eslint setup

Not everything needs to be inside a package, since most of it then needs
to be manually disabled or needs hacks to remove.

It's easier to modify the original eslint config. Hence, this.

## Usage

```sh
npx @barelyhuman/setup-eslint
```

> **Note**: This will override your `.eslintrc` file so make sure you create a backup file if you are running this in an ongoing project

> **Note**: This is written to work with prettier and turns off most of what is handled by prettier. So, you can have `formatOnSave` and `fixAll` both turned on when working with this setup.


# License

[MIT](/license)
