<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>图书名称</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.author }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return {
                msg:'Hello vue',
                books:[
                    {
                        id: 1,
                        name: 'Java',
                        author: 'jww'
                    },
                    {
                        id: 2,
                        name: 'vue',
                        author: 'xiaoxie'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>