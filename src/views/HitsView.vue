<template>
  <div class="home">
    <div v-if="selectedHit.id">
      <BaseSelectedHit :hit="selectedHit" />
    </div>
    <h3 v-if="selectedHit.id">Contrarie</h3>
    <h3 v-else>Colpi</h3>
    <div class="p-5" style="display:flex">
      <BaseHitPreview v-for="hit in hits" :key="hit.id" :hit="hit" @click="selectHit(hit)" />
    </div>
  </div>
  <div style="position:fixed;bottom:10px;right:10px">
    <div style="display:flex;flex-direction:column;bottom:10px;right:10px">
      <font-awesome-icon v-if="selectedHit.id" icon="pen-to-square" class="fa-4x" @click="modalEditShow" />
      <font-awesome-icon icon="circle-plus" class="fa-4x" @click="modalShow" />
    </div>
  </div>
  <div style="position:fixed;bottom:10px;left:10px">
    <div style="display:flex;flex-direction:column;bottom:10px;right:10px">
      <font-awesome-icon icon="caret-left" class="fa-4x" @click="reset" />
    </div>
  </div>


  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="selectedHit.id" class="modal-title" id="exampleModalLabel">Aggiungi contraria</h5>
          <h5 v-else class="modal-title" id="exampleModalLabel">Aggiungi colpo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="notesForm">
            <BaseInput v-model="hitToAdd.title" label="Titolo" />
            <BaseInput v-model="hitToAdd.description" label="Descrizione" />
            <input class="p-3" type="file" ref="file">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="postAction">Aggiungi</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modalEditRef">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modifica</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="notesForm">
            <BaseInput v-model="selectedHit.name" label="TitoloEdit" />
            <BaseInput v-model="selectedHit.description" label="DescrizioneEdit" />
            <input class="p-3" type="file" ref="fileEdit">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" style="position:absolute;left:15px" class="btn btn-danger" @click="deleteAction">Elimina</button>
          <button type="button" class="btn btn-success" @click="editAction">Modifica</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, } from 'vue'
import BaseHitPreview from '../components/BaseHitPreview';
import BaseSelectedHit from '../components/BaseSelectedHit';
import BaseInput from '../components/BaseInput';
import hitsMethods from '../api/resources/hitsMethods';
import { Modal } from 'bootstrap'

export default {
  name: 'HitsView',
  components: {
    BaseHitPreview, BaseSelectedHit, BaseInput
  },
  setup() {
    const selectedHit = ref({});
    const hits = ref([]);
    const modalRef = ref(null);
    const modalEditRef = ref(null);
    const hitToAdd = ref({ title: "", description: "" });
    const file = ref(null);
    const fileEdit = ref(null);
    var modal = Modal;
    var modalEdit = Modal;

    
    async function loadHits() {
      hits.value = [];
      modal = new Modal(modalRef.value)
      if (selectedHit.value.id) {
        var result = await hitsMethods.getHits(selectedHit.value.id);
        hits.value = result.childs;
      }
      else {
        hits.value = await hitsMethods.getInitialHits();
      }
    }
    onMounted(loadHits);

    function selectHit(obj) {
      modalEdit = new Modal(modalEditRef.value)
      selectedHit.value = obj;
      loadHits();
    }
    function modalShow() {
      modal.show();
    }
    function modalEditShow() {
      modalEdit.show();
    }
    async function postAction() {
      let data = new FormData();
      data.append('fileToUpload', file.value.files[0]);
      data.append('name', hitToAdd.value.title);
      data.append('description', hitToAdd.value.description);
      if (selectedHit.value.id) {
        data.append('parent', selectedHit.value.id);
      }
      await hitsMethods.postAction(data)
      loadHits();
      modal.hide();
    }

    async function editAction(){
      let data = new FormData();
      data.append('id', selectedHit.value.id);
      data.append('name', selectedHit.value.name);
      data.append('description', selectedHit.value.description);
      data.append('fileToUpload', fileEdit.value.files[0]);
      await hitsMethods.editAction(data)
      loadHits();
      modal.hide();
    }

    function reset(){
      selectedHit.value = {};
      loadHits();
    }

    async function deleteAction(){
      let data = new FormData();
      data.append('id', selectedHit.value.id);
      await hitsMethods.deleteAction(data)
      reset();
      modal.hide();
    }

    return {
      selectedHit, hits, hitToAdd, modalRef, modalShow, file,fileEdit,deleteAction,
      selectHit, postAction,editAction,
      modalEditShow, modalEditRef,reset
    }
  }
}
</script>
