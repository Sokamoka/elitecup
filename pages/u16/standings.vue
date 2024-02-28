<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.standings-u16') }}
  </h1>
  <div class="py-8">
    <!-- <mjsz-vbr-standings :locale="locale" championship-id="3444" division="Alapszakasz" /> -->

    <div>
      <table>
        <thead>
          <tr>
            <th>
              Pos
            </th>
            <th>
              Team
            </th>
            <th>
              <div>Total tournament appearances</div>
            </th>
            <th>Best 3 results</th>
            <th>GD</th>
            <th>
              <div>Tournament points</div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            
            <td>1.</td>
            <td>&Uacute;JA</td>
            <td>5</td>
            <td>23.09.01, 23.10.05, 24.01.05</td>
            <td>+17</td>
            <td>9</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>TRE</td>
            <td>3</td>
            <td>23.08.19,23.09.02,23.12.20.</td>
            <td>51</td>
            <td>8</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>RBS</td>
            <td>4</td>
            <td>23.09.02, 23.12.22., 24.01.06.</td>
            <td>48</td>
            <td>8</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>HKN</td>
            <td>3</td>
            <td>23.08.19, 23.09. 02,23.12.21.</td>
            <td>25</td>
            <td>8</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>BJA</td>
            <td>5</td>
            <td>23.08.18,23.10.06,24.01.05.</td>
            <td>34</td>
            <td>7</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>ITA</td>
            <td>3</td>
            <td>23.09.02,23.09.19, 24.01.05.</td>
            <td>29</td>
            <td>7</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>FEH</td>
            <td>5</td>
            <td>23.08.19,23.12.21,24.01.24.</td>
            <td>8</td>
            <td>6</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>PLS</td>
            <td>2</td>
            <td>23.09.02,24.01.27.</td>
            <td>7</td>
            <td>5</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>THU</td>
            <td>1</td>
            <td>23.10.05-08.</td>
            <td>8</td>
            <td>4</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>SLO</td>
            <td>3</td>
            <td>23.08.19, 23.09.02, 23.10.05.</td>
            <td>-5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>KRE</td>
            <td>3</td>
            <td>23.09.02,23.12.20, 24.01.06.</td>
            <td>-10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>ZLN</td>
            <td>1</td>
            <td>24.01.26-28.</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>GRA</td>
            <td>3</td>
            <td>23.08.19, 23.09.02, 24.01.06.</td>
            <td>-21</td>
            <td>2</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>VIC</td>
            <td>3</td>
            <td>23.08.19,23.09.02,23.12.20.</td>
            <td>-32</td>
            <td>2</td>
          </tr>
          <tr>
            <td>15.</td>
            <td>JES</td>
            <td>1</td>
            <td>23.09.02-03.</td>
            <td>-6</td>
            <td>1</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>CRO</td>
            <td>1</td>
            <td>24.01.06-07.</td>
            <td>-11</td>
            <td>1</td>
          </tr>
          <tr>
            <td>17.</td>
            <td>SEC</td>
            <td>3</td>
            <td>23.08.19, 23.09.02, 24.01.06.</td>
            <td>-34</td>
            <td>1</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>MIS</td>
            <td>3</td>
            <td>23.08.20, 23.09.02, 24.01.27.</td>
            <td>-36</td>
            <td>1</td>
          </tr>
          <tr>
            <td>19.</td>
            <td>LJS</td>
            <td>1</td>
            <td>23.12.21-22.</td>
            <td>-17</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>POR</td>
            <td>3</td>
            <td>23.09.02, 23.08.19, 23.12.20.</td>
            <td>-59</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
