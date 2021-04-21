const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = () => {
  const cwd = path.resolve(__dirname);

  let lib_path;
  const platform = os.platform();

  if (platform == "darwin")
    lib_path = path.join(cwd, "/bin/mac/libtdjson.dylib");
  else if (platform == "linux")
    lib_path = path.join(cwd, "/bin/linux/libtdjson.so");

  return lib_path
}