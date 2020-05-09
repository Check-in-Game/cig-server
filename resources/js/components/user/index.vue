<template>
  <div>
    <!-- Welcome -->
    <div>
      <a-row>
        <a-col :span="24">
          <h3> 欢迎回来，{{ user.nickname }}！ </h3>
        </a-col>
      </a-row>
    </div>

    <a-divider />

    <!-- Assets -->
    <div class="uc-assets">
      <a-row :gutter="{ xs: 0, sm: 0, md: 16, lg: 24 }">
        <a-col :md="24" :lg="12">
          <a-card title="资产一览">
            <a-table
              :columns="table_assets.columns"
              :data-source="table_assets.data"
            />
          </a-card>
        </a-col>
        <a-col :md="24" :lg="12">
          <a-card>
            <a-empty />
          </a-card>
        </a-col>
      </a-row>
    </div>

    <a-divider />

  </div>
</template>

<script>
export default {
  data: function() {
    return {
        'title': '用户中心',
        'user': {
          'username': user.username,
          'nickname': user.nickname,
          'points': user.points,
          'stones': user.stones,
          'papers': user.papers,
          'brocades': user.brocades,
          'mys_stones': user.mys_stones,
          'star_stones': user.star_stones,
          'is_admin': user.is_admin,
          'last_login_at': user.last_login_at,
        },
        'table_assets': {
          'columns': [],
          'data': [],
        },
    }
  },
  watch: {
    'title': function() {
      this.modifyTitle();
    }
  },
  mounted: function() {
    this.modifyTitle();
    this.table_assets.columns = [
      {
        'title': '资产类型',
        'dataIndex': 'type'
      },
      {
        'title': '数量',
        'dataIndex': 'count'
      },
    ];
    this.table_assets.data = [
      {
        'key': 'points',
        'type': '积分',
        'count': this.user.points,
      },
      {
        'key': 'stones',
        'type': '石',
        'count': this.user.stones,
      },
      {
        'key': 'papers',
        'type': '符',
        'count': this.user.papers,
      },
      {
        'key': 'brocades',
        'type': '锦',
        'count': this.user.brocades,
      },
      {
        'key': 'mys_stones',
        'type': '神秘石',
        'count': this.user.mys_stones,
      },
      {
        'key': 'star_stones',
        'type': '星石',
        'count': this.user.star_stones,
      },
    ];

  },
  methods: {
    modifyTitle: function() {
      this.$emit('getTitle', this.title);
    }
  },
}
</script>

<style lang="css" scoped>
.uc-assets {
  margin-top: 10px;
}
</style>
