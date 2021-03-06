import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../../services/propiedades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Propiedad } from '../../../models/appCore';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-propiedad-info',
    templateUrl: './propiedad-info.component.html',
    styleUrls: [
        './propiedad-info.component.css',
        '../propiedad-list/propiedad-list.component.css'
    ]
})
export class PropiedadInfoComponent implements OnInit {

    public propiedad: Propiedad;


    constructor(
        private srv: PropiedadesService,
        private router: Router,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) {
    }

    async ngOnInit() {
        window.scrollTo(0, 0);
        const id = this.route.snapshot.params['id'];
        this.propiedad = await this.srv.getPropiedadById(id);

    }

    buscar($event) {
        this.router.navigate(['/buscar'], {
            queryParams: {
                filtro: JSON.stringify($event)
            }
        });
    }

    textoHtml(texto) {
        let newTexto = '';
        for (let i = 0; i < texto.length; i++) {
            if (texto.charCodeAt(i) === 10) {
                newTexto += '<br>';
            } else {
                newTexto += texto.charAt(i);
            }
        }
        return newTexto;
    }

    meInteresa() {
        this.router.navigate(['contactanos'], {
            queryParams: {
                propiedad: this.propiedad.id
            }
        });
    }


    verificarCalleSecundaria() {
        if (this.propiedad.calleSecundaria) {
            return `y ${this.propiedad.calleSecundaria}`
        }
        return null;
    }


}
