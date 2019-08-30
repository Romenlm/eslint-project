<template>
  <div class="hello">
    <pre>{{ format }}</pre>
  </div>
</template>

<script>
	import {format} from './format.js'

	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		data() {
			return {
				format
			}
		},
		created() {
			for (let column of this.format.columns) {
				for (let list of column.list) {
					list.options.component.props = ['element']
					delete list.options.component._Ctor
					delete list.options.preview._Ctor
				}
			}
		}
	}
</script>
<style>
  .aa{
   background-color: #df333f;
  }
</style>

