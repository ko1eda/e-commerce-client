export default {
  methods: {
    /**
     * routeInList : traverse through every path in the given list
     *  removing any leading and trailing slashes.
     *  Append a '/' to the beggining of each path for compatability.
     *  If the path has an * at the end, fuzzy match the path with the route
     *  If the path doesn not have a * match the whole path with the route
     *
     * @return Boolean: true if any path from the list returns a match
     * 
     */
    routeInList(list) {
      return list.some((path) => {
        path = path.replace(/(^\/)|(\/$)/g, '');

        path = '/' + path;

        if (path.charAt(path.length - 1) === '*') {
          let regex = new RegExp(path, 'g');

          return regex.test(this.$route.path);
        }

        return path === this.$route.path;
      });
    },
  }
};