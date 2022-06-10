import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/xpluscal/svelte-schemaform.git', // Update to point to your repository
  user: {
   name: 'Calvin Hoenes', // update to use your name
   email: 'svelte-schemaform@proton.me' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
