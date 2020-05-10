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
              size="small"
              :columns="table_assets.columns"
              :data-source="table_assets.data"
              :pagination="false"
              bordered
            >
            <span slot="icon" slot-scope="icon">
              <img :src="icon" alt="货币" height="24px" />
            </span>
            </a-table>
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
          'runes': user.runes,
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
        'title': '图标',
        'dataIndex': 'icon',
        'scopedSlots': { customRender: 'icon' },
      },
      {
        'title': '名称',
        'dataIndex': 'type',
      },
      {
        'title': '数量',
        'dataIndex': 'count',
      },
    ];
    this.table_assets.data = [
      {
        'key': 'points',
        'icon': staticurl + '/images/v4/currency/points.svg',
        'type': '积分',
        'count': this.user.points,
      },
      {
        'key': 'stones',
        'icon': staticurl + '/images/v4/currency/stones.svg',
        'type': '石',
        'count': this.user.stones,
      },
      {
        'key': 'runes',
        'icon': staticurl + '/images/v4/currency/runes.svg',
        'type': '符',
        'count': this.user.runes,
      },
      {
        'key': 'brocades',
        'icon': staticurl + '/images/v4/currency/brocades.svg',
        'type': '锦',
        'count': this.user.brocades,
      },
      {
        'key': 'mys_stones',
        'icon': staticurl + '/images/v4/currency/mys_stones.svg',
        'type': '神秘石',
        'count': this.user.mys_stones,
      },
      {
        'key': 'star_stones',
        'icon': staticurl + '/images/v4/currency/star_stones.svg',
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
